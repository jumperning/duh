import { Title } from "../../common/titles"
import SliderCard from "./card"
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from "react";
import CustomSwiper from "./custom-swiper";

function QuienesSomos() {

    const [swipePos, setSwipePos] = useState(["left", "center", "right"]);

    function nextSwipe() {
        var auxSwipePos: any = [];
        swipePos.forEach((swipe: any, index: any) => {
            var newSwipe = "";
            switch (swipe) {
                case "left":
                    newSwipe = "center"; break;
                case "center":
                    newSwipe = "right"; break;
                case "right":
                    newSwipe = "left"; break;
            }
            auxSwipePos[index] = newSwipe;
        });
        setSwipePos(auxSwipePos);
    }

    function previousSwipe() {
        var auxSwipePos: any = [];
        swipePos.forEach((swipe: any, index: any) => {
            var newSwipe = "";
            switch (swipe) {
                case "left":
                    newSwipe = "right"; break;
                case "center":
                    newSwipe = "left"; break;
                case "right":
                    newSwipe = "center"; break;
            }
            auxSwipePos[index] = newSwipe;
        });
        setSwipePos(auxSwipePos);
    }

    return (
        <section id="quienes" className="mt-44 sm:mt-12 w-full flex justify-center items-center flex-col">
            <div className="sm:hidden">
            <Title>
                ¿Quiénes somos?
            </Title>
            <p className="-skew-y-3 text-lg Aglet-extra text-white mb-5 uppercase text-center leading-5">
                ¡Somos Duh!<br />
                ¡Evolucionemos juntos!
            </p>
            </div>
            <div className="relative max-w-[800px] w-full mx-auto py-8 h-[460px] sm:h-[60vh] lg:max-w-[800px]">
                <CustomSwiper nextSwipe={nextSwipe} previousSwipe={previousSwipe} swipePos={swipePos[0]} initialPosition="left">
                    <SliderCard swipePos={swipePos[0]} bg={true} >
                        <p className="-skew-y-3 uppercase text-center">
                            ¿Quieres llegar<br />
                            A la audiencia deseada?
                        </p>
                        <svg className="w-[150px]" viewBox="6.2446 6.1486 243.8011 166.0618" width="243.8011" height="166.0618" xmlns="http://www.w3.org/2000/svg">
                            <g xmlns="http://www.w3.org/2000/svg" id="Group 3" transform="matrix(1.9291720390319824, 0, 0, 1.9291720390319824, -125.64347839355469, -207.4081268310547)">
                                <g id="Duh!">
                                    <path d="M76.9992 196.759C75.5071 196.831 74.0503 196.698 72.6289 196.359C71.2527 196.017 70.0344 195.193 68.974 193.884C69.1753 192.424 69.4936 190.573 69.929 188.331C70.4073 186.042 70.9674 183.568 71.6092 180.908C72.2487 178.203 72.9098 175.474 73.5924 172.722C74.3202 169.967 75.0093 167.351 75.6598 164.872C76.3555 162.391 76.9761 160.23 77.5216 158.391C78.0649 156.507 78.474 155.127 78.749 154.253C78.8671 153.884 79.0669 153.331 79.3484 152.592C79.6299 151.853 79.9792 151.111 80.3964 150.366C80.8566 149.573 81.3911 148.913 82.0001 148.385C82.6068 147.812 83.2946 147.506 84.0632 147.469C84.7867 147.434 85.5685 147.668 86.4087 148.171C85.1623 151.45 83.9098 155.068 82.6511 159.027C81.4376 162.983 80.2748 167.05 79.1627 171.229C78.0958 175.404 77.1149 179.486 76.2202 183.472C75.3232 187.413 74.6133 191.005 74.0904 194.248C74.5491 194.362 75.0735 194.427 75.6635 194.444C76.2557 194.506 76.8231 194.524 77.3657 194.498C80.2595 194.358 83.0064 193.522 85.6063 191.991C88.2514 190.458 90.6475 188.462 92.7945 186.001C94.9415 183.54 96.7793 180.777 98.3079 177.712C99.8816 174.645 101.043 171.484 101.792 168.23C102.586 164.973 102.911 161.853 102.767 158.869C102.589 155.206 101.834 152.252 100.502 150.005C99.1673 147.713 97.4111 146.075 95.2334 145.093C93.0558 144.111 90.5652 143.687 87.7618 143.823C84.8227 143.965 82.205 144.658 79.9084 145.903C77.6097 147.102 75.8281 148.684 74.5635 150.648C73.3419 152.566 72.7892 154.722 72.9052 157.119C72.9314 157.662 73.0018 158.179 73.1163 158.672C73.2308 159.165 73.3679 159.657 73.5276 160.148C71.7642 160.233 70.4785 159.888 69.6704 159.111C68.8623 158.334 68.4298 157.358 68.3729 156.183C68.2963 154.6 68.7849 152.99 69.8388 151.353C70.9356 149.668 72.4459 148.099 74.3698 146.647C76.3367 145.146 78.6343 143.925 81.2627 142.982C83.8889 141.994 86.7393 141.425 89.814 141.276C94.1095 141.068 97.5865 141.739 100.245 143.287C102.948 144.833 104.957 147.002 106.27 149.793C107.584 152.585 108.326 155.744 108.497 159.271C108.685 163.16 108.255 166.92 107.207 170.551C106.159 174.182 104.599 177.544 102.528 180.635C100.502 183.724 98.1198 186.468 95.3806 188.867C92.6845 191.218 89.7607 193.082 86.6095 194.458C83.4582 195.835 80.2548 196.601 76.9992 196.759Z" fill="#F4CA58" />
                                    <path d="M115.061 191.042C113.524 191.116 112.224 190.477 111.161 189.123C110.144 187.767 109.59 186.162 109.501 184.309C109.439 183.043 109.571 181.541 109.894 179.803C110.263 178.063 110.725 176.363 111.279 174.705C111.831 173.001 112.42 171.59 113.046 170.472C113.717 169.352 114.324 168.779 114.866 168.753C115.183 168.737 115.643 168.874 116.246 169.162C116.894 169.448 117.455 169.806 117.929 170.236C117.467 170.984 116.911 172.143 116.262 173.716C115.658 175.286 115.128 176.966 114.671 178.756C114.211 180.5 114.016 182.096 114.087 183.543C114.097 183.769 114.143 184.242 114.223 184.964C114.347 185.638 114.558 186.262 114.858 186.837C115.203 187.409 115.737 187.678 116.46 187.643C117.229 187.606 118.046 187.158 118.911 186.301C119.774 185.398 120.624 184.246 121.463 182.846C122.347 181.443 123.18 179.93 123.963 178.306C124.745 176.682 125.463 175.129 126.116 173.647C126.77 172.165 127.299 170.916 127.703 169.899C128.067 169.927 128.547 170.017 129.143 170.169C129.783 170.274 130.335 170.451 130.801 170.701C131.311 170.948 131.578 171.32 131.603 171.818C131.609 171.953 131.41 172.529 131.006 173.546C130.648 174.561 130.208 175.783 129.688 177.213C129.168 178.643 128.717 180.093 128.335 181.561C127.998 183.028 127.856 184.304 127.909 185.389C127.941 186.067 128.105 186.649 128.401 187.133C128.696 187.617 129.228 187.841 129.997 187.803C130.946 187.757 132.056 187.273 133.326 186.351C134.641 185.426 135.96 184.116 137.282 182.42C138.603 180.679 139.751 178.652 140.727 176.339L141.713 177.039C140.836 179.529 139.654 181.784 138.165 183.805C136.72 185.778 135.119 187.352 133.363 188.524C131.652 189.695 129.96 190.321 128.287 190.402C127.021 190.463 126.035 190.216 125.328 189.661C124.623 189.151 124.114 188.451 123.799 187.56C123.529 186.666 123.371 185.745 123.325 184.795C123.31 184.479 123.293 184.14 123.276 183.778C123.303 183.414 123.332 183.073 123.362 182.754C122.657 184.102 121.859 185.41 120.969 186.677C120.121 187.896 119.196 188.915 118.193 189.734C117.236 190.551 116.192 190.987 115.061 191.042Z" fill="#F4CA58" />
                                    <path d="M142.925 190.237C141.975 190.283 141.237 189.548 140.711 188.033C140.186 186.562 139.877 184.855 139.783 182.911C139.68 180.786 139.919 178.236 140.5 175.262C141.082 172.288 141.881 169.145 142.899 165.832C143.915 162.475 145.071 159.201 146.367 156.011C147.706 152.773 149.083 149.851 150.498 147.245C151.955 144.591 153.348 142.461 154.675 140.856C156.002 139.251 157.186 138.423 158.226 138.373C159.13 138.329 159.834 138.816 160.336 139.834C160.837 140.807 161.112 141.814 161.162 142.854C161.224 144.12 161.004 145.671 160.504 147.508C160.047 149.298 159.37 151.234 158.474 153.317C157.577 155.4 156.499 157.469 155.239 159.524C154.024 161.577 152.687 163.455 151.228 165.157C149.77 166.859 148.228 168.248 146.603 169.324C146.131 170.797 145.749 172.266 145.457 173.73C145.163 175.15 144.957 176.519 144.84 177.839C144.768 179.157 144.76 180.404 144.817 181.579C144.832 181.896 144.848 182.213 144.863 182.529C144.921 182.798 144.979 183.045 145.035 183.269C145.312 182.439 145.667 181.357 146.101 180.022C146.578 178.639 147.142 177.184 147.794 175.657C148.49 174.127 149.303 172.661 150.232 171.256C151.206 169.849 152.329 168.707 153.601 167.83C154.871 166.907 156.297 166.407 157.88 166.331C159.327 166.261 160.473 166.545 161.32 167.184C162.21 167.776 162.837 168.561 163.202 169.54C163.612 170.518 163.842 171.526 163.892 172.566C163.96 173.968 163.777 175.336 163.343 176.672C162.952 177.96 162.536 179.204 162.096 180.403C161.698 181.556 161.525 182.652 161.575 183.692C161.615 184.506 161.824 185.085 162.203 185.429C162.582 185.773 163.043 185.932 163.586 185.906C164.581 185.858 165.71 185.304 166.973 184.246C168.281 183.186 169.529 181.811 170.716 180.122C171.946 178.386 172.988 176.5 173.841 174.464L174.908 175.432C174.023 177.741 172.924 179.857 171.612 181.778C170.3 183.7 168.835 185.266 167.217 186.478C165.641 187.642 163.927 188.269 162.073 188.358C160.4 188.439 159.112 188.048 158.209 187.186C157.309 186.368 156.826 185.304 156.763 183.993C156.717 183.043 156.825 181.995 157.087 180.85C157.392 179.657 157.674 178.464 157.933 177.274C158.191 176.037 158.295 174.922 158.247 173.927C158.195 172.842 157.909 172.085 157.39 171.657C156.916 171.227 156.339 171.028 155.661 171.061C154.531 171.116 153.535 171.617 152.675 172.565C151.814 173.513 151.034 174.707 150.333 176.146C149.677 177.583 149.071 179.107 148.515 180.721C147.956 182.289 147.395 183.811 146.832 185.289C146.312 186.719 145.734 187.88 145.097 188.772C144.463 189.709 143.739 190.198 142.925 190.237ZM147.708 165.463C148.833 164.367 149.926 163.067 150.987 161.566C152.045 160.019 153.009 158.409 153.88 156.735C154.796 155.059 155.579 153.435 156.228 151.862C156.877 150.29 157.375 148.884 157.723 147.643C158.116 146.4 158.319 145.439 158.331 144.758C158.327 144.668 158.301 144.601 158.254 144.558C158.251 144.513 158.228 144.491 158.182 144.494C157.911 144.507 157.352 145.123 156.504 146.342C155.655 147.517 154.667 149.105 153.54 151.109C152.458 153.11 151.389 155.36 150.331 157.858C149.274 160.357 148.4 162.892 147.708 165.463Z" fill="#F4CA58" />
                                    <path d="M179.154 165.845C179.945 163.45 180.796 160.916 181.709 158.243C182.62 155.525 183.558 152.896 184.523 150.357C185.486 147.772 186.438 145.437 187.379 143.352C188.364 141.22 189.324 139.519 190.259 138.25C191.195 136.981 192.092 136.326 192.952 136.284C193.404 136.262 193.797 136.425 194.131 136.771C194.51 137.115 194.713 137.559 194.739 138.101C194.77 138.734 194.467 139.973 193.831 141.816C193.193 143.615 192.347 145.809 191.294 148.398C190.241 150.987 189.06 153.74 187.751 156.659C186.442 159.578 185.109 162.475 183.753 165.35C182.394 168.181 181.094 170.805 179.851 173.221C178.606 175.593 177.544 177.525 176.664 179.018C176.527 178.98 176.411 178.94 176.319 178.899C176.226 178.858 176.133 178.817 176.041 178.777C176.152 177.321 176.373 175.815 176.706 174.257C177.036 172.655 177.438 171.117 177.91 169.644C178.383 168.171 178.797 166.905 179.154 165.845ZM174.865 186.788C174.187 186.82 173.59 186.668 173.075 186.33C172.563 186.038 172.288 185.507 172.25 184.739C172.211 183.925 172.629 183.202 173.505 182.57C174.379 181.894 175.313 181.531 176.308 181.483C176.941 181.452 177.468 181.585 177.891 181.882C178.311 182.134 178.538 182.621 178.573 183.345C178.608 184.068 178.236 184.811 177.458 185.574C176.724 186.335 175.86 186.739 174.865 186.788Z" fill="#F4CA58" />
                                </g>
                                <g id="better call">
                                    <path d="M89.2762 116.747C89.3173 117.461 89.1583 118.111 88.7992 118.698C88.4394 119.274 87.9302 119.766 87.2718 120.173C87.7268 120.448 88.0937 120.797 88.3723 121.22C88.6619 121.631 88.8216 122.095 88.8514 122.614C88.8873 123.236 88.7327 123.863 88.3877 124.496C88.0536 125.116 87.5891 125.68 86.9942 126.188C86.3987 126.685 85.7118 127.1 84.9335 127.434C84.1552 127.768 83.3514 127.959 82.5219 128.006C81.6233 128.058 80.8243 127.931 80.1247 127.624C79.4372 127.329 78.8855 126.881 78.4695 126.281C78.5648 125.928 78.69 125.494 78.8451 124.976C79.0111 124.446 79.193 123.893 79.3909 123.315C79.5881 122.726 79.7856 122.142 79.9835 121.564C80.1929 120.986 80.3883 120.466 80.5698 120.005C80.9511 119 81.296 118.166 81.6044 117.501C81.9129 116.836 82.2001 116.305 82.4662 115.908C81.8439 116.14 81.2809 116.398 80.7771 116.681C80.2726 116.953 79.906 117.211 79.6774 117.456C79.5697 117.393 79.4543 117.295 79.3311 117.164C79.2195 117.031 79.1072 116.888 78.9942 116.732C78.8921 116.565 78.8015 116.397 78.7224 116.228C78.6549 116.058 78.6113 115.905 78.5918 115.767C78.8794 115.543 79.2541 115.324 79.7158 115.113C80.1883 114.889 80.7029 114.692 81.2594 114.521C81.8159 114.35 82.3856 114.208 82.9685 114.093C83.5629 113.978 84.1308 113.905 84.6722 113.874C86.0546 113.794 87.1535 114.008 87.9687 114.516C88.7839 115.024 89.2198 115.767 89.2762 116.747ZM82.9304 121.256C82.7056 121.165 82.495 121.021 82.2987 120.824C82.0676 121.427 81.8474 122.018 81.638 122.596C81.4401 123.174 81.263 123.71 81.1065 124.204C80.9501 124.699 80.8246 125.128 80.7299 125.492C80.6353 125.855 80.5869 126.118 80.5847 126.28C80.7513 126.363 80.9453 126.421 81.1669 126.455C81.3999 126.488 81.6835 126.494 82.0176 126.475C82.8009 126.43 83.5434 126.277 84.2451 126.017C84.9467 125.757 85.5576 125.427 86.0778 125.027C86.5974 124.616 87.0045 124.159 87.2991 123.657C87.5938 123.154 87.7259 122.638 87.6954 122.108C87.6515 121.348 87.2917 120.82 86.6158 120.523C85.7385 120.944 84.7353 121.187 83.6064 121.252C83.4451 121.261 83.3184 121.268 83.2262 121.273C83.1456 121.278 83.047 121.272 82.9304 121.256ZM85.9373 115.066C85.6953 115.08 85.4371 115.113 85.1626 115.163C84.899 115.201 84.6191 115.258 84.3229 115.333C84.3716 115.376 84.4092 115.426 84.4355 115.482C84.4727 115.527 84.5045 115.577 84.5309 115.633C84.4352 115.777 84.3201 115.986 84.1856 116.26C84.0511 116.533 83.902 116.854 83.7382 117.222C83.5738 117.578 83.4002 117.975 83.2174 118.413C83.0461 118.851 82.8698 119.3 82.6883 119.761C82.8815 119.704 83.1156 119.656 83.3908 119.617C83.6768 119.566 83.9581 119.532 84.2345 119.516C84.3843 119.508 84.5286 119.505 84.6675 119.509C84.818 119.512 84.963 119.521 85.1025 119.536C85.6502 119.412 86.1379 119.251 86.5657 119.053C87.0044 118.842 87.3784 118.613 87.6876 118.364C87.9963 118.103 88.2287 117.824 88.3849 117.526C88.5411 117.228 88.6099 116.918 88.5913 116.595C88.5594 116.042 88.3167 115.64 87.863 115.389C87.4086 115.126 86.7667 115.019 85.9373 115.066Z" fill="#F4CA58" />
                                    <path d="M96.9671 118.471C97.3472 118.449 97.647 118.535 97.8663 118.731C98.0971 118.926 98.2231 119.207 98.2444 119.576C98.2497 119.668 98.2438 119.767 98.2267 119.872C98.2205 119.964 98.2079 120.046 98.1888 120.117C98.0378 120.102 97.8697 120.094 97.6847 120.094C97.4991 120.081 97.2795 120.082 97.0261 120.097C96.5307 120.125 96.0323 120.2 95.5307 120.322C95.0285 120.432 94.5486 120.529 94.0911 120.613C93.8613 121.239 93.6536 121.846 93.4679 122.434C93.2816 123.011 93.1213 123.541 92.9873 124.022C92.8647 124.503 92.7673 124.919 92.6951 125.27C92.6344 125.621 92.6032 125.882 92.6017 126.056C93.5235 125.806 94.4528 125.585 95.3895 125.392C96.3377 125.199 97.3339 125.038 98.3783 124.908C98.5163 125.097 98.6322 125.304 98.7262 125.53C98.8316 125.755 98.892 126 98.9072 126.265C98.9112 126.334 98.9155 126.409 98.9202 126.489C98.9248 126.57 98.9179 126.651 98.8995 126.733C98.5763 126.74 98.2358 126.748 97.878 126.757C97.5209 126.778 97.0543 126.805 96.4783 126.838C96.0982 126.86 95.7356 126.887 95.3907 126.918C95.0579 126.96 94.7197 127.009 94.3761 127.063C94.0325 127.118 93.6665 127.185 93.2782 127.265C92.9013 127.345 92.4733 127.439 91.9941 127.547C91.4522 127.37 90.9104 126.893 90.3685 126.115C90.5405 125.689 90.775 125.046 91.0722 124.185C91.3802 123.312 91.7641 122.151 92.2239 120.703C91.6962 120.572 91.3397 120.303 91.1545 119.898C91.2088 119.837 91.3719 119.758 91.6437 119.661C91.9149 119.553 92.2494 119.442 92.6473 119.326C92.7942 118.867 92.9157 118.467 93.0116 118.126C93.1191 117.785 93.2106 117.468 93.2862 117.174C93.3611 116.869 93.4251 116.577 93.4783 116.296C93.5423 116.004 93.5993 115.688 93.6492 115.35C93.2446 115.35 92.9215 115.259 92.6798 115.077C92.4375 114.883 92.307 114.624 92.2884 114.302C92.2831 114.21 92.2883 114.099 92.3041 113.971C92.3313 113.843 92.3596 113.731 92.3888 113.637C92.6212 113.658 92.8414 113.669 93.0495 113.668C93.269 113.667 93.5516 113.657 93.8972 113.637C94.6229 113.595 95.3016 113.539 95.9332 113.468C96.5642 113.385 97.1318 113.306 97.636 113.231C98.1518 113.155 98.593 113.089 98.9596 113.033C99.3256 112.966 99.6065 112.926 99.8024 112.915C100.067 112.9 100.311 113.025 100.535 113.289C100.758 113.554 100.936 113.936 101.069 114.437C100.71 114.423 100.415 114.417 100.184 114.419C99.9642 114.42 99.768 114.426 99.5952 114.435C98.9616 114.472 98.3818 114.54 97.8559 114.64C97.3408 114.727 96.8434 114.819 96.3635 114.916C96.3003 115.024 96.2273 115.161 96.1445 115.328C96.0731 115.494 95.9766 115.725 95.855 116.021C95.7333 116.317 95.5814 116.689 95.3993 117.139C95.2287 117.588 95.0183 118.149 94.7681 118.823C95.2019 118.728 95.6079 118.653 95.9861 118.596C96.3751 118.528 96.7021 118.486 96.9671 118.471Z" fill="#F4CA58" />
                                    <path d="M103.603 114.967C103.142 114.994 102.777 114.888 102.509 114.649C102.252 114.398 102.113 114.088 102.092 113.719C102.086 113.627 102.092 113.517 102.107 113.389C102.135 113.26 102.169 113.149 102.209 113.054C102.363 113.114 102.585 113.154 102.875 113.172C103.176 113.177 103.522 113.169 103.914 113.146C104.501 113.113 105.162 113.051 105.897 112.963C106.643 112.862 107.353 112.763 108.03 112.666C108.706 112.57 109.302 112.483 109.818 112.407C110.333 112.32 110.666 112.272 110.815 112.263C111.242 112.239 111.556 112.382 111.759 112.694C111.973 112.994 112.141 113.406 112.264 113.931C111.963 113.925 111.662 113.925 111.362 113.931C111.073 113.924 110.824 113.927 110.617 113.939C110.248 113.96 109.875 113.993 109.496 114.038C109.129 114.083 108.756 114.139 108.379 114.207C108.237 114.55 108.081 114.958 107.912 115.43C107.742 115.89 107.573 116.374 107.406 116.881C107.25 117.387 107.1 117.892 106.956 118.398C106.811 118.892 106.686 119.338 106.582 119.737C106.373 120.512 106.188 121.227 106.03 121.884C105.883 122.54 105.75 123.154 105.633 123.727C105.527 124.288 105.436 124.825 105.362 125.338C105.287 125.851 105.224 126.351 105.171 126.84C104.393 126.769 103.72 126.323 103.152 125.5C103.224 125.137 103.311 124.745 103.414 124.323C103.527 123.889 103.655 123.402 103.798 122.862C103.951 122.31 104.129 121.687 104.331 120.994C104.534 120.3 104.766 119.512 105.027 118.63C105.124 118.301 105.226 117.96 105.332 117.607C105.439 117.243 105.539 116.884 105.635 116.532C105.741 116.179 105.832 115.839 105.905 115.511C105.99 115.182 106.06 114.884 106.114 114.615C105.633 114.7 105.175 114.779 104.74 114.85C104.316 114.909 103.937 114.948 103.603 114.967Z" fill="#F4CA58" />
                                    <path d="M113.762 114.382C113.301 114.409 112.936 114.302 112.668 114.064C112.411 113.813 112.272 113.503 112.251 113.134C112.245 113.042 112.25 112.932 112.266 112.804C112.293 112.675 112.327 112.563 112.368 112.468C112.522 112.529 112.744 112.568 113.034 112.586C113.335 112.592 113.681 112.584 114.073 112.561C114.66 112.527 115.321 112.466 116.056 112.377C116.801 112.277 117.512 112.178 118.189 112.081C118.865 111.984 119.461 111.898 119.977 111.822C120.492 111.734 120.824 111.686 120.974 111.678C121.4 111.653 121.715 111.797 121.918 112.109C122.132 112.409 122.3 112.821 122.423 113.345C122.122 113.34 121.821 113.34 121.521 113.345C121.232 113.339 120.983 113.342 120.776 113.354C120.407 113.375 120.034 113.408 119.655 113.453C119.287 113.497 118.915 113.553 118.537 113.621C118.395 113.965 118.24 114.372 118.071 114.845C117.901 115.305 117.732 115.789 117.565 116.295C117.409 116.801 117.259 117.307 117.115 117.812C116.97 118.306 116.845 118.753 116.741 119.151C116.531 119.926 116.347 120.642 116.189 121.299C116.041 121.954 115.909 122.569 115.792 123.142C115.686 123.703 115.595 124.24 115.521 124.752C115.446 125.265 115.383 125.766 115.33 126.255C114.551 126.184 113.878 125.737 113.311 124.914C113.382 124.552 113.47 124.16 113.572 123.738C113.686 123.304 113.814 122.817 113.956 122.277C114.109 121.725 114.287 121.102 114.49 120.408C114.693 119.715 114.925 118.927 115.186 118.045C115.283 117.716 115.385 117.375 115.491 117.022C115.597 116.657 115.698 116.299 115.793 115.947C115.9 115.594 115.99 115.253 116.064 114.925C116.149 114.597 116.219 114.298 116.272 114.029C115.792 114.115 115.334 114.193 114.899 114.264C114.475 114.324 114.096 114.363 113.762 114.382Z" fill="#F4CA58" />
                                    <path d="M127.815 116.693C128.195 116.671 128.495 116.758 128.714 116.953C128.945 117.148 129.071 117.43 129.092 117.798C129.097 117.89 129.092 117.989 129.074 118.094C129.068 118.187 129.056 118.268 129.037 118.339C128.886 118.325 128.717 118.317 128.532 118.316C128.347 118.304 128.127 118.305 127.874 118.319C127.378 118.348 126.88 118.423 126.378 118.544C125.876 118.654 125.396 118.751 124.939 118.835C124.709 119.461 124.501 120.068 124.316 120.657C124.129 121.234 123.969 121.763 123.835 122.245C123.712 122.726 123.615 123.142 123.543 123.493C123.482 123.843 123.451 124.105 123.449 124.278C124.371 124.029 125.301 123.807 126.237 123.615C127.185 123.421 128.182 123.26 129.226 123.131C129.364 123.319 129.48 123.526 129.574 123.752C129.679 123.977 129.74 124.222 129.755 124.487C129.759 124.556 129.763 124.631 129.768 124.712C129.773 124.792 129.766 124.874 129.747 124.956C129.424 124.963 129.084 124.971 128.726 124.98C128.369 125 127.902 125.027 127.326 125.06C126.946 125.082 126.583 125.109 126.238 125.14C125.906 125.183 125.567 125.231 125.224 125.286C124.88 125.34 124.514 125.407 124.126 125.488C123.749 125.567 123.321 125.661 122.842 125.77C122.3 125.593 121.758 125.115 121.216 124.338C121.388 123.912 121.623 123.268 121.92 122.407C122.228 121.534 122.612 120.374 123.072 118.925C122.544 118.794 122.187 118.526 122.002 118.12C122.057 118.059 122.22 117.98 122.491 117.884C122.763 117.776 123.097 117.664 123.495 117.549C123.642 117.089 123.763 116.689 123.859 116.349C123.967 116.007 124.058 115.69 124.134 115.397C124.209 115.092 124.273 114.799 124.326 114.519C124.39 114.226 124.447 113.911 124.497 113.573C124.092 113.573 123.769 113.482 123.528 113.299C123.285 113.105 123.155 112.847 123.136 112.524C123.131 112.432 123.136 112.322 123.152 112.194C123.179 112.065 123.207 111.954 123.237 111.86C123.469 111.881 123.689 111.891 123.897 111.891C124.117 111.89 124.399 111.879 124.745 111.859C125.471 111.817 126.149 111.761 126.781 111.69C127.412 111.607 127.98 111.528 128.484 111.453C129 111.377 129.441 111.311 129.807 111.255C130.173 111.188 130.454 111.149 130.65 111.138C130.915 111.122 131.159 111.247 131.382 111.511C131.606 111.776 131.784 112.159 131.917 112.66C131.558 112.646 131.263 112.64 131.031 112.641C130.812 112.642 130.616 112.648 130.443 112.658C129.809 112.694 129.23 112.762 128.704 112.862C128.189 112.95 127.691 113.042 127.211 113.139C127.148 113.247 127.075 113.384 126.992 113.55C126.921 113.716 126.824 113.947 126.703 114.243C126.581 114.539 126.429 114.912 126.247 115.362C126.076 115.811 125.866 116.372 125.616 117.045C126.05 116.951 126.456 116.875 126.834 116.819C127.223 116.75 127.55 116.708 127.815 116.693Z" fill="#F4CA58" />
                                    <path d="M142.834 113.66C142.866 114.213 142.77 114.745 142.545 115.255C142.331 115.752 142.016 116.21 141.601 116.627C141.185 117.032 140.691 117.384 140.119 117.683C139.546 117.982 138.917 118.197 138.231 118.329C138.434 118.838 138.672 119.361 138.946 119.9C139.231 120.427 139.532 120.936 139.849 121.426C140.166 121.916 140.493 122.366 140.828 122.774C141.164 123.182 141.489 123.516 141.805 123.775C141.754 123.894 141.674 124.014 141.565 124.136C141.468 124.257 141.348 124.368 141.203 124.469C141.071 124.58 140.926 124.67 140.768 124.737C140.622 124.814 140.48 124.857 140.342 124.865C140.088 124.88 139.839 124.773 139.595 124.544C139.351 124.315 139.093 123.949 138.821 123.444C138.56 122.928 138.273 122.262 137.96 121.448C137.658 120.622 137.318 119.63 136.939 118.473C136.813 118.48 136.686 118.488 136.559 118.495C136.433 118.502 136.334 118.496 136.263 118.477C136.18 118.436 136.089 118.36 135.99 118.25C135.718 118.936 135.477 119.58 135.269 120.182C135.061 120.783 134.875 121.366 134.711 121.93C134.558 122.482 134.422 123.022 134.302 123.549C134.193 124.064 134.102 124.589 134.029 125.125C133.632 125.055 133.282 124.908 132.98 124.683C132.678 124.457 132.388 124.133 132.109 123.71C132.149 123.604 132.19 123.503 132.231 123.408C132.282 123.301 132.343 123.159 132.414 122.981C132.484 122.793 132.569 122.556 132.668 122.273C132.779 121.99 132.919 121.612 133.088 121.14C133.269 120.667 133.478 120.088 133.716 119.404C133.966 118.719 134.265 117.887 134.613 116.908C134.772 116.471 134.906 116.088 135.015 115.758C135.134 115.427 135.238 115.115 135.325 114.821C135.411 114.516 135.486 114.217 135.55 113.924C135.625 113.619 135.698 113.274 135.768 112.888C135.249 113.103 134.765 113.339 134.318 113.596C133.881 113.841 133.52 114.099 133.235 114.369C133.128 114.306 133.012 114.209 132.889 114.077C132.778 113.945 132.671 113.801 132.57 113.645C132.467 113.477 132.377 113.309 132.298 113.14C132.219 112.972 132.169 112.818 132.15 112.681C132.482 112.431 132.89 112.193 133.374 111.969C133.87 111.744 134.396 111.546 134.953 111.375C135.509 111.193 136.078 111.044 136.661 110.93C137.244 110.815 137.789 110.744 138.295 110.714C139.678 110.635 140.766 110.861 141.559 111.393C142.352 111.914 142.777 112.67 142.834 113.66ZM138.534 112.452C138.46 112.56 138.345 112.775 138.19 113.096C138.035 113.417 137.855 113.803 137.65 114.254C137.456 114.693 137.246 115.173 137.022 115.694C136.809 116.215 136.602 116.73 136.4 117.238C137.264 117.189 138.054 117.062 138.771 116.859C139.487 116.656 140.102 116.395 140.616 116.077C141.128 115.747 141.517 115.377 141.783 114.969C142.059 114.549 142.183 114.097 142.155 113.613C142.122 113.037 141.89 112.611 141.458 112.335C141.025 112.048 140.377 111.929 139.513 111.979C139.317 111.99 139.122 112.013 138.927 112.048C138.732 112.07 138.525 112.1 138.308 112.135L138.534 112.452Z" fill="#F4CA58" />
                                    <path d="M110.533 139.681C110.487 138.874 110.534 138.08 110.673 137.297C110.824 136.503 111.052 135.75 111.358 135.039C111.663 134.316 112.035 133.653 112.474 133.05C112.924 132.435 113.419 131.897 113.959 131.439C114.511 130.979 115.102 130.616 115.734 130.348C116.365 130.069 117.021 129.91 117.701 129.871C118.495 129.825 119.121 129.957 119.578 130.265C120.047 130.574 120.298 131.027 120.333 131.626C120.346 131.857 120.325 132.095 120.27 132.341C120.226 132.586 120.148 132.833 120.035 133.082C119.934 133.319 119.808 133.552 119.66 133.78C119.511 134.008 119.343 134.209 119.157 134.381C118.855 134.353 118.588 134.235 118.356 134.029C118.124 133.811 117.971 133.554 117.896 133.258C118.28 132.9 118.577 132.537 118.786 132.166C119.007 131.784 119.109 131.442 119.092 131.143C119.062 130.636 118.731 130.401 118.097 130.437C117.832 130.453 117.559 130.526 117.278 130.658C117.007 130.778 116.734 130.944 116.457 131.156C116.18 131.369 115.912 131.621 115.651 131.913C115.402 132.205 115.172 132.525 114.961 132.872C113.492 135.268 112.827 137.67 112.966 140.078C113.015 140.93 113.187 141.608 113.482 142.111C113.777 142.615 114.146 142.9 114.589 142.967C115.078 142.823 115.687 142.47 116.418 141.908C117.148 141.345 117.939 140.624 118.79 139.742C118.911 139.851 118.987 139.968 119.018 140.093C118.709 140.55 118.388 140.991 118.054 141.415C117.72 141.838 117.384 142.228 117.046 142.582C116.72 142.936 116.391 143.25 116.06 143.523C115.741 143.796 115.441 144.01 115.161 144.165C113.731 144.224 112.624 143.877 111.841 143.125C111.058 142.372 110.622 141.224 110.533 139.681Z" fill="#F4CA58" />
                                    <path d="M121.218 143.781C120.655 143.651 120.26 143.512 120.032 143.364C119.815 143.214 119.7 143.019 119.686 142.777C119.676 142.593 119.712 142.33 119.797 141.99C119.881 141.65 120.009 141.25 120.178 140.789C120.359 140.317 120.572 139.796 120.817 139.227C121.073 138.657 121.361 138.045 121.682 137.391C121.382 137.397 121.111 137.407 120.869 137.421C120.638 137.423 120.447 137.428 120.297 137.436C120.357 137.26 120.544 137.099 120.859 136.953C121.174 136.808 121.594 136.674 122.119 136.551C122.525 135.777 122.962 135.035 123.43 134.326C123.909 133.616 124.391 132.964 124.877 132.37C125.362 131.764 125.852 131.233 126.346 130.777C126.839 130.309 127.314 129.935 127.772 129.655C127.779 129.573 127.781 129.504 127.778 129.446C127.786 129.388 127.789 129.347 127.788 129.324C127.949 129.315 128.165 129.343 128.434 129.408C128.715 129.473 128.986 129.556 129.246 129.656C129.518 129.756 129.755 129.864 129.958 129.979C130.172 130.083 130.293 130.174 130.321 130.253C129.979 130.943 129.662 131.967 129.371 133.325C129.078 134.671 128.865 136.278 128.73 138.147C128.699 138.611 128.677 139.138 128.665 139.728C128.664 140.318 128.685 140.975 128.726 141.701C128.741 141.955 128.756 142.214 128.771 142.479C128.786 142.744 128.814 143.019 128.854 143.306C128.831 143.319 128.809 143.326 128.785 143.327C128.762 143.329 128.716 143.331 128.647 143.335C128.486 143.345 128.294 143.327 128.072 143.282C127.862 143.248 127.651 143.196 127.439 143.128C127.239 143.07 127.062 142.999 126.907 142.916C126.763 142.831 126.672 142.756 126.633 142.689C126.613 142.539 126.599 142.39 126.59 142.24C126.582 142.102 126.574 141.952 126.564 141.791C126.523 141.077 126.504 140.35 126.508 139.61C126.523 138.869 126.572 138.103 126.653 137.313C126.491 137.311 126.277 137.311 126.012 137.315C125.745 137.307 125.445 137.307 125.11 137.315C124.787 137.322 124.435 137.331 124.054 137.341C123.684 137.339 123.32 137.343 122.962 137.352C122.716 137.886 122.487 138.42 122.274 138.952C122.062 139.473 121.884 139.998 121.741 140.526C121.577 141.09 121.448 141.652 121.353 142.213C121.269 142.772 121.224 143.295 121.218 143.781ZM127.289 133.011C127.326 132.847 127.365 132.625 127.407 132.346C127.46 132.054 127.506 131.75 127.545 131.436C127.263 131.556 126.952 131.765 126.611 132.062C126.281 132.358 125.938 132.725 125.582 133.162C125.236 133.586 124.883 134.069 124.521 134.61C124.17 135.138 123.832 135.701 123.509 136.298C124.472 136.161 125.569 136.046 126.8 135.952C126.864 135.463 126.935 134.979 127.011 134.501C127.099 134.01 127.191 133.514 127.289 133.011Z" fill="#F4CA58" />
                                    <path d="M137.823 140.518C138.139 140.997 138.311 141.467 138.338 141.927C138.344 142.031 138.337 142.124 138.319 142.206C138.313 142.299 138.301 142.392 138.283 142.485C138.086 142.474 137.877 142.468 137.658 142.469C137.45 142.47 137.231 142.477 137 142.49C136.724 142.506 136.442 142.528 136.155 142.556C135.879 142.595 135.57 142.642 135.226 142.696C134.883 142.751 134.5 142.819 134.077 142.901C133.654 142.983 133.163 143.087 132.603 143.211C132.333 143.135 132.058 142.965 131.777 142.704C131.496 142.455 131.23 142.146 130.978 141.779C131.079 141.519 131.205 141.2 131.356 140.821C131.507 140.431 131.682 139.965 131.882 139.421C132.081 138.867 132.299 138.224 132.534 137.494C132.78 136.752 133.037 135.899 133.306 134.936C133.477 134.302 133.624 133.744 133.747 133.263C133.869 132.782 133.975 132.32 134.065 131.875C134.166 131.419 134.26 130.945 134.348 130.455C134.435 129.964 134.529 129.398 134.631 128.756C135.097 128.822 135.505 128.972 135.853 129.206C136.213 129.428 136.562 129.761 136.899 130.203C136.816 130.359 136.709 130.607 136.578 130.95C136.448 131.293 136.293 131.712 136.113 132.208C135.944 132.692 135.757 133.246 135.55 133.87C135.343 134.483 135.126 135.143 134.901 135.849C134.687 136.544 134.476 137.197 134.269 137.81C134.061 138.423 133.874 138.977 133.706 139.472C133.549 139.967 133.423 140.39 133.328 140.742C133.233 141.095 133.19 141.357 133.2 141.53C133.384 141.508 133.55 141.487 133.699 141.467C133.848 141.446 134.003 141.42 134.163 141.388C134.322 141.344 134.493 141.299 134.675 141.254C134.868 141.197 135.095 141.126 135.356 141.042C135.584 140.971 135.794 140.912 135.988 140.867C136.181 140.809 136.369 140.764 136.552 140.73C136.746 140.684 136.94 140.65 137.136 140.627C137.342 140.592 137.571 140.556 137.823 140.518Z" fill="#F4CA58" />
                                    <path d="M146.463 140.02C146.78 140.499 146.951 140.969 146.978 141.43C146.984 141.533 146.977 141.626 146.959 141.708C146.953 141.801 146.941 141.894 146.923 141.988C146.726 141.976 146.518 141.97 146.298 141.972C146.09 141.972 145.871 141.979 145.64 141.992C145.364 142.008 145.082 142.03 144.795 142.058C144.519 142.097 144.21 142.144 143.866 142.198C143.523 142.253 143.14 142.321 142.717 142.403C142.294 142.485 141.803 142.589 141.244 142.714C140.973 142.637 140.698 142.468 140.417 142.206C140.137 141.957 139.87 141.648 139.618 141.282C139.719 141.021 139.845 140.702 139.996 140.324C140.147 139.933 140.322 139.467 140.522 138.924C140.722 138.369 140.939 137.726 141.174 136.996C141.42 136.254 141.677 135.401 141.946 134.438C142.117 133.804 142.264 133.246 142.387 132.765C142.509 132.284 142.615 131.822 142.705 131.377C142.806 130.921 142.9 130.447 142.988 129.957C143.075 129.466 143.17 128.9 143.271 128.259C143.737 128.324 144.145 128.474 144.493 128.708C144.853 128.93 145.202 129.263 145.539 129.706C145.456 129.861 145.349 130.11 145.218 130.452C145.088 130.795 144.933 131.214 144.753 131.71C144.585 132.194 144.397 132.748 144.19 133.372C143.983 133.985 143.766 134.645 143.541 135.351C143.327 136.046 143.116 136.699 142.909 137.312C142.701 137.925 142.514 138.479 142.346 138.974C142.189 139.469 142.063 139.892 141.968 140.245C141.873 140.597 141.83 140.859 141.84 141.032C142.024 141.01 142.19 140.989 142.339 140.969C142.488 140.949 142.643 140.922 142.803 140.89C142.962 140.846 143.133 140.802 143.315 140.756C143.508 140.699 143.736 140.628 143.997 140.544C144.224 140.473 144.434 140.415 144.628 140.369C144.821 140.311 145.009 140.266 145.192 140.232C145.386 140.186 145.581 140.152 145.776 140.129C145.982 140.094 146.211 140.058 146.463 140.02Z" fill="#F4CA58" />
                                </g>
                            </g>
                        </svg>
                    </SliderCard>
                </CustomSwiper>
                <CustomSwiper nextSwipe={nextSwipe} previousSwipe={previousSwipe} swipePos={swipePos[1]} initialPosition="center">
                    <SliderCard swipePos={swipePos[1]} bg={true} >
                        <p className="-skew-y-3 w-3/5 text-center Aglet">
                            Somos una compañía de <b className="Aglet-bold">Estrategias Creativas con tecnología AdTech<br /></b>
                            dedicada a <b className="Aglet-bold">gestionar campañas de influencers</b> conectando <b className="Aglet-bold">marcas con los perfiles ideales</b> para sus acciones de marketing.
                        </p>
                    </SliderCard>
                </CustomSwiper>
                <CustomSwiper nextSwipe={nextSwipe} previousSwipe={previousSwipe} swipePos={swipePos[2]} initialPosition="right">
                    <SliderCard swipePos={swipePos[2]} bg={false} >
                        <div className="flex flex-col justify-center items-start">
                            <Title className="text-left">
                                Quiénes<br />
                                somos?
                            </Title>
                            <p onClick={previousSwipe} className="-skew-y-3 text-lg Aglet-extra text-white mb-5 uppercase text-left leading-5">
                                ¡Somos Duh!<br />
                                ¡Evolucionemos juntos!
                            </p>
                        </div>

                    </SliderCard>
                </CustomSwiper>

            </div>
        </section>
    )
}

export default QuienesSomos
