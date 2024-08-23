import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import preview from "../../img/preview.png";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="">
                    <div className="grid grid-cols-2">
                        <img className="w-[850px] rounded-br-[12%]" src={preview} />
                        <div className="flex flex-col mt-20 ml-36">
                            <h1 className="w-96 leading-loose font-black text-2xl">
                                Charming exclusivity and maintained coolness, we
                                make the dream of a true and memorable
                                accommodation come true.
                            </h1>
                            <h3 className="w-96 text-md mt-5">
                                Pelayanan yang diberikan sangat luar biasa! Staf
                                sangat ramah, responsif, dan berdedikasi. Mereka
                                dengan senang hati membantu dengan segala
                                kebutuhan kami. Fasilitas modern dan kebersihan
                                kamar juga patut diacungi jempol. Pengalaman
                                menginap kami benar-benar menyenangkan. Terima
                                kasih atas layanan yang memuaskan, kami pasti
                                akan merekomendasikan tempat ini kepada teman
                                dan keluarga!
                            </h3>
                        </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
