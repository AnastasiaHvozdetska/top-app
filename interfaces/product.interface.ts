export interface ProductCharacteristic {
    value: string;
    name: SVGStringList;
}

export interface ReviewModel {
    _id: string;
    name: string;
    title: string;
    description: string;
    rating: number;
    createdAt: Date;
}

export interface ProductModel {
    _id: string;
    categories: string[];
    tags: string[];
    title: string;
    link: string;
    price: number;
    credit: number;
    oldPrice: number;
    description: string;
    charasteristics: ProductCharacteristic[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    image: string;
    initialRating: number;
    reviews: ReviewModel[];
    reviewCount: number;
    reviewAvg?: number;
    advantages: string;
}
