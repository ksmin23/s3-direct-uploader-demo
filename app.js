var uploader = new qq.s3.FineUploader({
    debug: false, // defaults to false
    element: document.getElementById('fine-uploader'),
    request: {
        //TODO: S3 Bucket URL
        endpoint: 'https://{s3-bucket-name}.s3.amazonaws.com',
        //TODO: IAM User AccessKey
        accessKey: '{IAM User AccessKey}'
    },
    objectProperties: {
        //TODO: AWS Region name
        region: '{region-name}',
        key(fileId) {
            //TODO: S3 Bucket Prefix
            var prefixPath = '{s3-bucket-prefix}'
            var filename = this.getName(fileId)
            return prefixPath + '/' + filename
        }
    },
    signature: {
        // version
        version: 4,
        //TODO: AWS API Gateway Lambda Authorizers URL
        endpoint: 'https://{api-gateway-id}.execute-api.{region-name}.amazonaws.com/{api-gateway-version}'
    },
    retry: {
        enableAuto: true // defaults to false
    }
});
