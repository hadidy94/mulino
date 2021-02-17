export interface Menu {
    item_id: number;
    item_name_ar: string;
    item_name_en: string;
    item_price: number;
    item_desc_ar: string;
    item_desc_en: string;
    item_photo: string;
    item_video: string;
    item_parent_id: number;
    item_status?: boolean;
    period_id: number;
    order_no: number;
    item_kal: string;
    is_new?: boolean;
    items: any 
}
