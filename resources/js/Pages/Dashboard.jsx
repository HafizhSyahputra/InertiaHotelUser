import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import preview from "../../img/preview.png";
import preview1 from "../../img/preview1.png";
import preview2 from "../../img/preview2.png";
import SearchBar from "@/Components/dashboardComponent/SearchBar";
import Divider from "@/Components/dashboardComponent/Divider";
import PromoRating from "@/Components/dashboardComponent/PromoRating";
import Footer from "@/Components/Footer";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="relative">
                <div className="grid grid-cols-2">
                    <img
                        className="w-[100%] rounded-br-[12%]"
                        src={preview}
                        alt="Room Preview"
                    />
                    <div className="flex flex-col mt-20 ml-36">
                        <h1 className="w-96 leading-loose font-bold text-2xl">
                            Charming exclusivity and maintained coolness, we
                            make the dream of a true and memorable accommodation
                            come true.
                        </h1>
                        <h3 className="w-96 text-md mt-5">
                            Pelayanan yang diberikan sangat luar biasa! Staf
                            sangat ramah, responsif, dan berdedikasi. Mereka
                            dengan senang hati membantu dengan segala kebutuhan
                            kami. Fasilitas modern dan kebersihan kamar juga
                            patut diacungi jempol. Pengalaman menginap kami
                            benar-benar menyenangkan. Terima kasih atas layanan
                            yang memuaskan, kami pasti akan merekomendasikan
                            tempat ini kepada teman dan keluarga!
                        </h3>
                    </div>
                </div>
                {/* <div className="absolute inset-x-0 bottom-[210px] flex justify-center">
                    <SearchBar />
                </div> */}
                <div className="flex justify-center gap-x-5 px-32 mt-20 mb-20">
                    <div className="flex flex-col">
                        {" "}
                        <h3 className="w-96 text-3xl mt-20 leading-relaxed">
                            Our hotel has been available for more than{" "}
                            <span className="text-blue-900">15 years</span> we
                            give best services to all
                        </h3>
                        <p className="w-96 text-md mt-5">
                            Capabiliza on low hanging fruit to identify a
                            ballpark value adder activity to beta test.
                        </p>
                    </div>
                    <img src={preview1} className="w-[337px] ml-20" />
                    <img src={preview2} className="w-[337px]" />
                </div>
                <div className="divider">
                    <Divider />
                </div>
                <div className="promo&rating mb-20">
                    <PromoRating />
                </div>
            </div>
            <div className="mt-32">
                <Footer />
            </div>
        </AuthenticatedLayout>
    );
}
