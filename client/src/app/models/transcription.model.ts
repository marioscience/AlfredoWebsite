export class TranscriptionItem {
  title: string;
  videoUrl: string;
  description: string;
  pdfUrl: string;
}

export class Transcription {
  description: string;
  transcriptions: TranscriptionItem[];
}
