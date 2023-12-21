export type Story = {
  id?:         number;
  userID?:     number;
  title?:      string;
  desc?:       string;
  thumbnail?:  string;
  genre?:      string;
  visibility?: number;
  createdAt?:  Date;
  updatedAt?:  Date;
}
