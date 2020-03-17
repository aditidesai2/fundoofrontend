import { logging } from 'protractor';
import { ExecFileSyncOptionsWithBufferEncoding } from 'child_process';

export class Note {
	n_id:number;
title: string;
	description:string;
	isArchived:boolean;
	isTrashed:boolean;
	isPinned:boolean;
	updatedtime:any;
}
