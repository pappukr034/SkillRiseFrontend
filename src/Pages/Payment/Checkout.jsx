import { useEffect } from "react";
import toast from "react-hot-toast";
import { BiRupee } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import HomeLayout from '../../Layouts/HomeLayout';
import { getRazorPayId, purchaseCourseBundle, verifyUserPayment } from "../../Redux/Slices/RazorpaySlice";

function Checkout() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const razorpayKey = useSelector((state) => state?.razorpay?.key);
    const subscription_id = useSelector((state) => state?.razorpay?.subscription_id);
    const paymentDetails = {
        razorpay_payment_id: "",
        razorpay_subscription_id: "",
        razorpay_signature: ""
    }

    async function handleSubscription(e) {
        e.preventDefault();
        if(!razorpayKey || !subscription_id) {
            toast.error("Something went wrong");
            return;
        }
        const options = {
            key: razorpayKey,
            subscription_id: subscription_id,
            name: "Coursify Pvt. Ltd.",
            description: "Subscription",
            theme: {
                color: '#F37254'
            },
            
            handler: async function (response) {
                paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
                paymentDetails.razorpay_signature = response.razorpay_signature;
                paymentDetails.razorpay_subscription_id = response.razorpay_subscription_id;

                toast.success("Payment successfull");

                const res = await dispatch(verifyUserPayment(paymentDetails));
                console.log(res);
                res?.payload?.success ? navigate("/checkout/success") : navigate("/checkout/fail");
            }
        }
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    async function load() {
        await dispatch(getRazorPayId());
        await dispatch(purchaseCourseBundle());
    }

    useEffect(() => {
        load();
    }, []);

    return (
        <HomeLayout>
            <form
                onSubmit={handleSubscription}
                className="min-h-[100vh] w-full flex items-center justify-center text-white bg-gradient-to-tr from-slate-900 to-slate-800 px-2 py-3"
            >
                <div className=" w-full py-3 px-2 flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg md:w-[50%]">
                    <h1 className=" w-full text-center py-4 text-2xl bg-yellow-100 font-bold rounded-tl-lg rounded-tr-lg text-black"> Unlock Unlimited Learning with Our Annual Access Pass!</h1>
                    <div className="px-4 space-y-5 text-center">
                       
                        <p className=" text-gray-300 leading-normal mt-4 text-[18px] flex flex-wrap flex-col">
                        For just <span className=" text-xl text-orange-600 ">&#8377;499</span>	, you can enjoy unlimited access to all available courses on our platform for an entire year. This includes not only our current extensive library but also all new courses that will be launched throughout the year.
                        100% Satisfaction Guarantee:
                        We're confident you'll love our courses. That's why we offer a 100% refund on cancellation within the first 30 days. No questions asked.
                        </p>

                        <p className="flex items-center justify-center text-2xl font-bold text-yellow-500">
                            <BiRupee /><span>499 </span>only
                        </p>
                        <div className="text-gray-200">
                            <p>100% refund on cancellation</p>
                            <p>* Terms and conditions applied *</p>
                        </div>
                        <button type="submit" className=" bg-green-400 hover:bg-green-500 transition-all ease-in-out duration-300 py-3 px-2  font-semibold rounded-md w-[100%]">
                            Purchase now
                        </button>
                    </div>
                </div>
            </form>
        </HomeLayout>
    );
    
}

export default Checkout;