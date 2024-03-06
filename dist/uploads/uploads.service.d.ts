/// <reference types="node" />
import * as AWS from 'aws-sdk';
import { MimeType } from 'aws-sdk/clients/bedrockagentruntime';
export declare class UploadsService {
    s3: AWS.S3;
    uploadFile(file: any): Promise<{
        url: string;
    }>;
    s3_upload(file: Buffer, bucket: string, name: string, mimetype: MimeType): Promise<{
        url: string;
    }>;
    remove(id: string): string;
}
