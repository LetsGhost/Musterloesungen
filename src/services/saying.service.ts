import SayingModel from "../schemas/saying.schema.js";

class sayingService {
    async create(saying: string){
        try{
            if(!saying){
                console.log("Saying is required");
                return {
                    success: false,
                    message: "Saying is required"
                }
            }
    
            const newSaying = new SayingModel({
                saying
            });
    
            await newSaying.save();
    
            console.log("Saying created successfully" + newSaying._id)
            return {
                success: true,
                message: "Saying created successfully"
            }
        } catch(err){
            console.log(err);
            return {
                success: false,
                message: err
            }
        }
    }

    async getAll(){
        try{
            const sayings = await SayingModel.find();

            if(!sayings){
                console.log("No sayings found");
                return {
                    success: false,
                    message: "No sayings found"
                }
            }
    
            console.log("Sayings found successfully");
            return {
                success: true,
                sayings
            };
        } catch(err){
            console.log(err);
            return {
                success: false,
                message: err
            }
        }
    }

    async getById(id: string){
        try{
            const saying = await SayingModel.findById(id);

            if(!saying){
                console.log("Saying not found");
                return {
                    success: false,
                    message: "Saying not found"
                }
            }

            console.log("Saying found successfully");
            return {
                success: true,
                saying
            };
        } catch(err){
            console.log(err);
            return {
                success: false,
                message: err
            }
        }
    }

    async update(id: string, saying: string){
        try{
            if(!saying || !id){
                console.log("Saying or id is required");
                return {
                    success: false,
                    message: "Saying or id is required"
                }
            }

            const updatedSaying = await SayingModel.findByIdAndUpdate(id, {saying}, {new: true});

            if(!updatedSaying){
                console.log("Saying not found");
                return {
                    success: false,
                    message: "Saying not found"
                }
            }

            console.log("Saying updated successfully");
            return {
                success: true,
                message: "Saying updated successfully"
            };
        } catch(err){
            console.log(err);
            return {
                success: false,
                message: err
            }
        }
    }

    async delete(id: string){
        try{
            if(!id){
                console.log("Id is required");
                return {
                    success: false,
                    message: "Id is required"
                }
            }

            const deletedSaying = await SayingModel.findByIdAndDelete(id);

            if(!deletedSaying){
                console.log("Saying not found");
                return {
                    success: false,
                    message: "Saying not found"
                }
            }

            console.log("Saying deleted successfully");
            return {
                success: true,
                message: "Saying deleted successfully"
            };
        } catch(err){
            console.log(err);
            return {
                success: false,
                message: err
            }
        }
    }

    async getRandom(){
        try{
            const sayings = await SayingModel.find();
            const randomSaying = sayings[Math.floor(Math.random() * sayings.length)];

            if(!randomSaying){
                console.log("No sayings found");
                return {
                    success: false,
                    message: "No sayings found"
                }
            }

            console.log("Random saying found successfully");
            return {
                success: true,
                randomSaying
            };
        } catch(err){
            console.log(err);
            return {
                success: false,
                message: err
            }
        }
    }
}

export default new sayingService();