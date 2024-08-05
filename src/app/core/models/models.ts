export interface SummitEvent {
  id: number;
  name: string;
  startDate: string;
  stopDate: string;
  description: string;
  imageUrl: string;
  isFinished: boolean;
  address: string;
  coordinates: [number, number] | null;
}
