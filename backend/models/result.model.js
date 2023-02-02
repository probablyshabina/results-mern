import mongoose from 'mongoose';

const resultSchema = mongoose.Schema({
    party: String,
    votes: Number,
    percentage: mongoose.Decimal128,
    district: String,
    election: String,
}, {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

resultSchema.index({ party: 1, district: 1, election: 1 }, { unique: true });
const Result = mongoose.model('Result', resultSchema);
Result.syncIndexes();

export default Result;


