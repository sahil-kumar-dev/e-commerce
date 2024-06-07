import mongoose from 'mongoose'

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Databse connected')
    } catch (error) {
        console.log('Database Connection Error :', error)
    }
}

export default connectToDb