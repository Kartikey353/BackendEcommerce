/// <reference types="multer" />
import { UploadsService } from './uploads.service';
export declare class UploadsController {
    private readonly uploadsService;
    constructor(uploadsService: UploadsService);
    uploadFile(attachment: Array<Express.Multer.File>): {
        id: string;
        original: string;
        thumbnail: string;
    }[];
}
