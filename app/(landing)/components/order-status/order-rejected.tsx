import Image from "next/image";
import { FiAlertCircle } from "react-icons/fi";

const OrderRejected = () => {
    return (
        <div className="bg-white w-160 p-16 flex flex-col justify-center items-center mx-auto">
            <div className="w-20 h-20 flex bg-primary-light rounded-full mx-auto p-3 justify-center items-center"><FiAlertCircle size={52}/></div>
            <h2 className="text-2xl font-semibold mb-2">Order Sebelum Rejected!!</h2>
            <p className="text-center mb-8">
                I'm sorry your order is rejected because your payment proof is not valid.
            </p>
        </div>
    )
}

export default OrderRejected;