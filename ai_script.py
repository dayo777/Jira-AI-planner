import json, logging, json, boto3
from botocore.exceptions import ClientError


class ImageError(Exception):
    def __init__(self, message):
        self.message = message


logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)


def generate_text(model_id, body):
    # logger.info("Generating text with Amazon Titan Text model %s", model_id)
    logger.info("Generating project ideas...")
    bedrock = boto3.client(service_name='bedrock-runtime')
    accept = "application/json"
    content_type = "application/json"

    response = bedrock.invoke_model(body=body, modelId=model_id, accept=accept, contentType=content_type)
    response_body = json.loads(response.get("body").read())

    finish_reason = response_body.get("error")

    if finish_reason is not None:
        raise ImageError(f"Text generation error. Error is {finish_reason}")

    # logger.info("Successfully generated text with Amazon Titan Text model %s", model_id)
    logger.info("Text generation done!")

    return response_body


def main():
    try:
        logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")

        # You can replace the model_id with any other Titan Text Models
        # Titan Text Model family model_id is as mentioned below:
        # amazon.titan-text-premier-v1:0, amazon.titan-text-express-v1, amazon.titan-text-lite-v1
        model_id = 'amazon.titan-text-premier-v1:0'

        # the project-desc & project-timeline should be taken as json variables
        project_desc = "I want to build a project for an elementary school that manages the ongoing academic activities of students."
        project_timeline = "10"

    
            
        prompt = """{}. The timeline for this project is {} weeks.
            Based on the description above, create a very detailed JSON output. The ouput should include a break down of different tasks or items that need to be carried out to complete the project.
        """.format(project_desc, project_timeline)

        body = json.dumps({
            "inputText": prompt,
            "textGenerationConfig": {
                "maxTokenCount": 3072,
                "stopSequences": [],
                "temperature": 0.4,
                "topP": 0.5
            }
        })

        response_body = generate_text(model_id, body)
        # print(f"Input token count: {response_body['inputTextTokenCount']}")

        for result in response_body['results']:
            # print(f"Token count: {result['tokenCount']}")
            print(f"Output text: {result['outputText']}")
            # print(f"Completion reason: {result['completionReason']}")

    except ClientError as err:
        message = err.response["Error"]["Message"]
        logger.error("A client error occurred: %s", message)
        print("A client error occured: " + format(message))
    except ImageError as err:
        logger.error(err.message)
        print(err.message)

    # else:
    #     print(
    #         f"Finished generating text with the Amazon Titan Text Premier model {model_id}.")


if __name__ == "__main__":
    main()