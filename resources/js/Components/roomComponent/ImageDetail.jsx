import React from "react";

function ImageDetail({ rooms }) {
    return (
        <div>
            {rooms.map((room) => (
                <div key={room.id_room}>
                    <div className="flex flex-row gap-x-10">
                        <div className="grid grid-cols-2 w-[490px] h-[400px] gap-4">
                            {room.detail_room?.images
                                ?.slice(1)
                                .map((image, index) => {
                                    let borderRadiusClass = "";
                                    if (index === 0) {
                                        borderRadiusClass = "rounded-tl-[20px]";
                                    } else if (index === 1) {
                                        borderRadiusClass = "rounded-tr-[20px]";
                                    } else if (index === 2) {
                                        borderRadiusClass = "rounded-bl-[20px]";
                                    } else if (index === 3) {
                                        borderRadiusClass = "rounded-br-[20px]";
                                    }

                                    return (
                                        <img
                                            key={index}
                                            className={`w-[313px] h-[195px] ${borderRadiusClass}`}
                                            src={image}
                                            alt="Room image"
                                        />
                                    );
                                })}
                        </div>
                        <div>
                            {room.detail_room?.images && (
                                <img
                                    className="w-[716px] h-[407px] rounded-xl"
                                    src={room.detail_room.images[0]}
                                    alt="Room image"
                                />
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ImageDetail;
