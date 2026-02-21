export interface CarparkServiceResponseItems {
  timestamp: string;
  carpark_data: Array<{
    total_lots: string;
    lot_type: string;
    lots_available: string;
  }>;
}

export interface CarparkServiceResponse {
  api_info: {
    status: string;
  };
  items: Array<CarparkServiceResponseItems>;
}
