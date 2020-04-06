const AWS = require('aws-sdk');
const codepipeline = new AWS.CodePipeline({apiVersion: '2015-07-09'});

const pipelineName = process.env.PIPELINE_NAME;

module.exports.handler = async function (event, context, callback) {
  console.log('--- PROCESS START ---');

  const { comment } = event.queryStringParameters;

  console.log('COMMENT: ', comment);

	const res = await codepipeline.startPipelineExecution({
		name: pipelineName
	}).promise();

  console.log(res);
	console.log('--- PROCESS END ---');
  return {
    statusCode: 200,
    body: JSON.stringify({
      pipelineName,
      res
    })
  }
}
