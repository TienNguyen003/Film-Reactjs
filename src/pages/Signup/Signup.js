export default function Signup() {
    return (
        <>
            <section class="normal-breadcrumb set-bg" style={{ backgroundImage: `url(https://t3.ftcdn.net/jpg/07/41/57/50/360_F_741575084_eLPzRBX4siOp3FbEsTOfkFNS0KO897HY.jpg)` }}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="normal__breadcrumb__text">
                                <h2>Sign Up</h2>
                                <p>Welcome to the official Anime blog.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="signup spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="login__form">
                                <h3>Sign Up</h3>
                                <form>
                                    <div class="input__item">
                                        <input type="text" placeholder="Email" />
                                        <span class="icon_mail"></span>
                                    </div>
                                    <div class="input__item">
                                        <input type="text" placeholder="Tên đăng nhập" />
                                        <span class="icon_profile"></span>
                                    </div>
                                    <div class="input__item">
                                        <input type="password" placeholder="Mật khẩu" />
                                        <span class="icon_lock"></span>
                                    </div>
                                    <h5></h5>
                                    <div id="example3"></div>
                                    <br />
                                    <button type="submit" class="site-btn">
                                        Signup Now
                                    </button>
                                </form>

                                <h5>
                                    Already have an account? <a href="/login">Log In!</a>
                                </h5>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="login__social__links">
                                <h3>Login With:</h3>
                                <ul>
                                    <li>
                                        <a href="#" class="facebook">
                                            <i class="fa fa-facebook"></i> Sign in With Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="google">
                                            <i class="fa fa-google"></i> Sign in With Google
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="twitter">
                                            <i class="fa fa-twitter"></i> Sign in With Twitter
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
