import toast from "react-hot-toast";

class ValidationHelper {
   
    SuccessToast(msg:string){
        toast.success(msg);
    }
}

export const { SuccessToast } = new ValidationHelper();