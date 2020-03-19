const AWS = require('aws-sdk');
const codepipeline = new AWS.CodePipeline({apiVersion: '2015-07-09'});

const pipelineName = process.env.PIPELINE_NAME;

module.exports.handler = async function (event, context, callback) {
	const params = {
		name: pipelineName
	};
	codepipeline.startPipelineExecution(params, (err, data) => {
		if (err) {
			console.log(err, err.stack);
		}
	});
	console.log('END');
  return true;
}