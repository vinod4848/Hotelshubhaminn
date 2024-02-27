export interface AppContextType {
  sideMenuOpen?: boolean;
  toggleSideMenu?: () => void;
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  roomId?: number;
  setRoomId?: React.Dispatch<React.SetStateAction<number>>;
}
export interface idType {
  id?: number;
}
export interface OfferType {
  id?: number;
  img?: any;
  offer?: string;
  tags?: string;
  title?: string;
}
export interface RoomType {
  id?: number;
  title?: string;
  price?: number;
  doubleOccupancy?: number;
  singleOccupancy?: number;
  extrabad?: number;
  time?: string;
  img?: any;
  img1?: any;
  img2?: any;
  img3?: any;
  img4?: any;
  img5?: any;
  img6?: any;
  img7?: any;
  img8?: any;
  details?: string;
  list1?: string;
  list2?: string;
  list3?: string;
  list4?: string;
}
export interface EventType {
  id?: number;
  img?: any;
  date?: string;
  title?: string;
  details?: string;
  description?: string;
  descriptionTwo?: string;
}
export interface EventFlowType {
  id?: number;
  title?: string;
}
export interface FeaturesType {
  id?: number;
  img?: any;
  title?: string;
  price?: number;
  oldPrice?: number;
}
export interface BlogsType {
  id?: number;
  img?: any;
  tag?: string;
  date?: string;
  month?: string;
  title?: string | undefined;
}
export interface faqInterFace {
  id: number;
  title: string;
  details: string;
}
