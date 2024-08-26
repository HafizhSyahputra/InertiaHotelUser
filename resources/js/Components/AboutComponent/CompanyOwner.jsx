import React from "react";
import girl from "../../../img/girl.png";
function CompanyOwner() {
    return (
        <div className="absolute">
            <div className="card bg-white shadow-md w-[680px] flex flex-row h-[480px] mt-80">
                <div className="text p-10">
                    <h1 className="text-2xl mb-6 font-bold text-center">company owner</h1>
                    <h3 className="leading-normal indent-8 text-justify w-[251px] font-medium">
                        {" "}
                        Digoda, seorang visioner dalam industri perhotelan,
                        adalah otak di balik kesuksesan perusahaan hotelnya.
                        Dengan kecerdasan bisnis dan ketajaman strategisnya,
                        Digoda menciptakan merek yang memukau dan unik.
                        Berpenampilan elegan, Digoda memancarkan sikap ramah dan
                        profesional. Keahliannya dalam merancang pengalaman
                        menginap membuatnya menjadi pemimpin terkemuka dalam
                        industri.
                    </h3>
                </div>
                <div>
                    <img className="w-[400px] h-full" src={girl}/>
                </div>
            </div>
        </div>
    );
}

export default CompanyOwner;
