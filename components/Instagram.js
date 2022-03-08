import React from 'react';
import Script from "next/script";

export const Instagram = () => {
    return (
        <>
            <Script id="show-banner">
                {`var userFeed = new Instafeed({
                get: 'user',
                target: "instafeed-container",
                resolution: 'low_resolution',
                accessToken: 'IGQVJYbVB0VmdkaHNqUVc3NWd4STNDX3BDcjFZAWHVscmNyckFDZAUtNREt6LUtmQk01ekZArNzhUWHQ2bktkRkJhRlM3eGdMNTBWeXhRaVdHak1WMm9fUThaWk5TdXNCTWNEU3RFTjZAZATURsT0x5WGVEXwZDZD',
                limit: 6,
                template: '<div class="ig-li">' +
                            '<ul class="ig-list">' +
                                '<a href="{{link}}" target="_blank" rel="noreferrer">' +
                                    '<img title="{{caption}}" src="{{image}}" />' +
                                '</a>' +
                                '<div class="text-ig-container">' +
                                    '<p>{{caption}}</p>' +
                                '</div>' +
                                '<a href="{{link}}" class="button-link" target="_blank" rel="noreferrer">' +
                                    '<button>' +
                                    'Ir a Ig' +
                                    '<i class="pi pi-instagram ml-4 my-auto"></i>' +
                                    '</button>' +
                                '</a>' +
                            '</ul>' +
                          '</div>'
            });
            userFeed.run();`}
            </Script>
            <p className="bg-background-100 mx-auto pb-4 lg:pb-8  text-center text-darkpurple font-MontserratBold sm:w-100 xl:text-4xl text-3xl">Instagram</p>
            <div id="instafeed-container" className="bg-background-100 pb-16">
            </div>
        </>
    )
}
