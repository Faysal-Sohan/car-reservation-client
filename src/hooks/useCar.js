import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useCar = () => {

    const { data: cars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            const res = await axios.get('https://exam-server-7c41747804bf.herokuapp.com/carsList');
            return res.data.data;
        }
    })
   
    return [cars];
};

export default useCar;