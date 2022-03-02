<div
                className="fb-like"
                data-share="true"
                data-width="450"
                data-show-faces="true">
            </div>
            <div className="fb-customerchat"
                attribution="page_inbox"
                page_id="1034237637519170">
            </div>
<div id="fb-root"></div>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.fbAsyncInit = function() {
                        FB.init({
                          appId      : '1034237637519170',
                          xfbml      : true,
                          version    : 'v13.0'
                        });
                        FB.AppEvents.logPageView();
                      };

                      (function(d, s, id){
                         var js, fjs = d.getElementsByTagName(s)[0];
                         if (d.getElementById(id)) {return;}
                         js = d.createElement(s); js.id = id;
                         js.src = "https://connect.facebook.net/en_US/sdk.js";
                         fjs.parentNode.insertBefore(js, fjs);
                       }(document, 'script', 'facebook-jssdk'));
            `,
                }}
            ></script>