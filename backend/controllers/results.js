import Result from "../models/result.model.js";

export const getAllResults = async (req, res) => {
    try {
        const results = await Result.find({}); 
        res.status(200).json({results});
    } catch (error) {
        res.status(500).json({msg: error});
    }
};

export const addResult = async (req, res) => {
    try{
        const result = await Result.create(req.body);
        res.status(201).json({result});
    }catch(error){
        res.status(500).json({msg: error});
    }
};

export const getResult = async (req, res) => {
    try{
        const {_id: resultID} = req.params;
        const result = await Result.findOne({_id: resultID});
        if(!result){
            return res.status(404).json({msg: `no result with id: ${resultID}`});
        }
        res.status(200).json({result});
    }catch(error){
        res.status(500).json({msg: error});
    }
};

export const updateResult = async (req, res) => {
    try{
        const {_id: resultID} = req.params;
        const result = await Result.findByIdAndUpdate({_id: resultID}, req.body, {
            new: true,
            runValidation: true
        });
        if(!result){
            return res.status(404).json({msg: `No result with id: ${resultID}`});
        }
        res.status(200).json({result});
    }catch(error){
        res.status(500).json({msg: error});
    }
};

export const deleteResult = async (req, res) => {
    console.log(req)
    try{
        const {_id: resultID} = req.params;
        console.log("resultID: ")
        console.log(resultID)
        const result = await Result.findOneAndDelete({_id: resultID});
        if(!result){
            return res.status(404).json({msg: 'No result with id: ${resultID}'});
        }
        res.status(200).json({result: null, status: 'successfully deleted'});
    }catch(error){
        res.status(500).json({msg: error});
    }
};