// csrf
function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

/* (7) 로그아웃 버튼을 설정하고 동작을 정의합니다. */

// 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init('1d42e53bd6515bec851dc1ba04e83568');

var kakaoLogin = function loginWithKakao() {
    // 로그인 창을 띄웁니다.
    Kakao.Auth.login({
        success: function(authObj) {
            Kakao.API.request({
                url: '/v2/user/me',
                success: function(res) {
                    // alert(JSON.stringify(authObj));
                    // alert(JSON.stringify(res));
                    $.ajaxSetup({
                        beforeSend: function(xhr, settings) {
                            var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
                            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                                xhr.setRequestHeader("X-CSRFToken", csrftoken);
                            }
                        }
                    });

                    $.ajax({
                        type: 'POST',
                        url: '',
                        data: { 
                                service_type: 'KAKAO',
                                id: res['id'],
                                nickname: res['properties']['nickname'],
                                email: res['kakao_account']['email'],
                            },
                        async: false,
                        success: function(data) {
                            if(data != null) {
                                // Do somothing when data is not null
                                // console.log(res['properties']['nickname'])
                                console.log('ajax kakao login success...')
                                console.log(data)
                                window.location.replace(data)
                            }
                        },
                        fail: function(error) {
                            console.log('ajax kakao login failed...')
                            // window.location.replace('/')
                            console.log(JSON.stringify(error));
                        }
                    });
                },
                fail: function(error) {
                    alert(JSON.stringify(error));
                }
            });
        },
        fail: function(err) {
            alert(JSON.stringify(err));
        }
    });
};

kakaoLogout = function logoutWithKakao(params) {
    Kakao.Auth.logout(function () {
        $.ajaxSetup({
            beforeSend: function(xhr, settings) {
                var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
                if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                    xhr.setRequestHeader("X-CSRFToken", csrftoken);
                }
            }
        });

        $.ajax({
            type: 'POST',
            url: 'logout/',
            async: false,
            success: function(data) {
                if(data != null) {
                    // Do somothing when data is not null
                    // console.log(res['properties']['nickname'])
                    console.log('ajax kakao logout success...')
                    console.log(data)
                    window.location.replace(data)
                }
            },
            fail: function(error) {
                console.log('ajax kakao logout failed...')
                window.location.replace('/')
                console.log(JSON.stringify(error));
            }
        });
    });
};