<template>
    <RegisterHeader/>
    <Background>
        <div class="form-register bg-white rounded-md p-10 flex flex-col">
            <div class="form-register__title text-3xl">Đăng ký</div>
            <div class="form-register__group flex-1">
                <ul class="form-register__group__list pt-6 h-full flex flex-col justify-center">
                    <li class="form-register__group__item flex flex-col relative">
                        <input type="text" name="" id="" class="form-register__group__input mb-2" placeholder="usename">
                        <input type="text" name="" id="" class="form-register__group__input mb-2" placeholder="password">
                        <div v-if="Notify" class="form-register__group__notify my-2 text-xl absolute">Tài khoản hoặc mật khẩu sai</div>
                        <button class="form-register__group__btn mt-12">ĐĂNG NHẬP</button>
                    </li>
                    <div class="form-register__wrapper flex justify-between mt-3 text-xl text-blue-600">
                        <div class="form-register__wrapper--item">Quên mật khẩu</div>
                        <div class="form-register__wrapper--item">Đăng nhập với SMS</div>
                    </div>
                </ul>
            </div>
            <div class="form-register__group-bottom">
                <div class="form-register__group__extra text-center flex items-center justify-center text-2xl py-4 text-text-gray-color-f1">
                    <div class="form-register__group__extra-line flex-1"></div>
                    <span class="px-4">Hoặc</span>
                    <div class="form-register__group__extra-line flex-1"></div>
                </div>
                <div class="form-register__group__other-register flex items-center justify-between h-20">
                    <div class="form-register__group__other-register__icon flex-1 h-16 flex justify-center">
                        <i class="fab fa-facebook text-blue-600"></i>
                        <span>Facebook</span>
                    </div>
                    <div class="form-register__group__other-register__icon flex-1 h-16 mx-4">
                        <i class="fab fa-google text-pink-600"></i>
                        <span>Google</span>
                    </div>
                    <div class="form-register__group__other-register__icon flex-1 h-16">
                        <i class="fab fa-apple"></i>
                        <span>Apple</span>
                    </div>
                </div>
                <div class="form-register__group__login text-center text-2xl mt-8">
                    <span class="text-text-gray-color-f1">Bạn mới biết đến Shopee? </span>
                    <router-link class="text-primary-color" to="/register">Đăng Ký</router-link>
                </div>
            </div>
        </div>
    </Background>
</template>

<script>
import Background from '../components/register/Background.vue'
import RegisterHeader from '../components/register-header/RegisterHeader.vue'
export default {
    name: 'Login',
    components: {
        Background,
        RegisterHeader
    },
    setup(){
        var Notify = false

        return {
            Notify
        }
    }
}
</script>

<style scoped>
.form-register{
    width: 40rem;
    height: 43rem;
}

.form-register__group__input{
    width: 100%;
    height: 4rem;
    border: 1px solid #ccc;
    font-size: 1.4rem;
    padding: 0 1.4rem;
}

.form-register__group__btn{
    height: 4rem;
    background-color: var(--primary-color);
    color: #fff;
    font-size: 1.5rem;
}

.form-register__group__extra-line{
    height: 1px;
    width: 100%;
    background-color: #ccc;
}

.form-register__group__other-register__icon{
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    cursor: pointer;
}

.form-register__group__other-register__icon i{
    font-size: 2.2rem;
    margin-right: .5rem;
}

.form-register__group__notify{
    bottom: 4.5rem;
}
</style>