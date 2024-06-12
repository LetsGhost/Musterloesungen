import mongoose from "mongoose";

export interface Saying {
    text: string;
    createdAt: Date;
}

const SayingSchema = new mongoose.Schema<Saying>({
    text: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const SayingModel = mongoose.model<Saying>('Saying', SayingSchema);

export default SayingModel;