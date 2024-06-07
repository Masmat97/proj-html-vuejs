<script>
  export default {
    data() {
      return {
        times: this.generateTimes()
      };
    },
    methods: {
      generateTimes() {
        const times = [];
        const start = new Date();
        start.setHours(6, 30, 0); 
        for (let i = 0; i < 36; i++) {
          const hour = start.getHours();
          const minutes = start.getMinutes();
          const period = hour >= 12 ? 'PM' : 'AM';
          const formattedTime = `${hour % 12 === 0 ? 12 : hour % 12}:${minutes < 10 ? '0' : ''}${minutes} ${period}`;
          times.push(formattedTime);
          start.setMinutes(start.getMinutes() + 30); 
        }
        return times;
      }
    }
  };
</script>

<template>
    <footer>
        <div class="container-fluid full-width-container my-2 mybgimgred">
            <div class="row d-flex align-items-center justify-content-center h-100">
                <div class="col-md-2 h-100 d-flex align-items-center">
                    <select class="form-select">
                        <option v-for="n in 20" :key="n">{{ n }} person{{ n > 1 ? 's' : '' }}</option>
                    </select>
                </div>
                <div class="col-md-2 h-100 d-flex align-items-center">
                    <input type="date" class="form-control">
                </div>
                <div class="col-md-2 h-100 d-flex align-items-center">
                    <select class="form-select">
                        <option v-for="time in times" :key="time">{{ time }}</option>
                    </select>
                </div>
                <div class="col-md-2 h-100 d-flex align-items-center">
                    <button class="btn btn-danger w-100">BOOK A TABLE</button>
                </div>
            </div>
        </div>

        <!-- Container in fondo -->

        <div class="container-fluid  my-3 mystarbg">
            <div class="d-flex justify-content-between">
                <div class="col-5">
                    <div class="row g-0  p-5">
                        <div class="col-4">
                            <p class="goldentext">FIND OUR RESTAURANTS</p>

                            <P class="text-secondary">1614 E. Bell Rd #104. <br>
                                Salerno, AZ 85022 <br>
                                (602) 867-1010
                            </P>

                            <P class="text-secondary">204 E. Pizzetta Tommaso <br>
                                Sorrento, AZ 85022 <br>
                                (358) 867-1010
                            </P>

                            <P class="text-secondary">Vale Puglia 54 <br>
                                Torre Del Greco AZ 85022 <br>
                                (359) 867-1010
                            </P>

                            <p class="text-secondary">Corso Itali AA <br>
                                Naples, AZ 85022 <br>
                                (989) 867-1010</p>

                            <p class="goldentext mymargin"> © 2020 <span class="text-success">Qode Interactive</span>
                            </p>
                        </div>

                        <div class="col-4">
                            <p class="goldentext">WORKING HOURS</p>

                            <P class="goldentext m-0">MONDAY</P>
                            <span class="text-danger">Kitchen Closed</span>

                            <p class="goldentext mt-3 mb-0">TUSEDAY UNTIL FRIDAY</p>
                            <span class="text-secondary">9:00 - 22:00</span>

                            <p class="goldentext mt-3 mb-0">SATURDAY <span class="text-danger">*</span></p>
                            <span class="text-secondary">Saturday 11am to <br> midnight</span>

                            <p class="goldentext mt-3 mb-0">SUNDAY</p>
                            <span class="text-secondary">9:00 - 22:00</span>

                            <p class="goldentext mt-5 mb-0">
                                FOLLOW US:
                                <span>
                                    <i class="fa fa-twitter"></i>
                                    <i class="fa fa-facebook-f"></i>
                                    <i class="fa fa-instagram"></i>
                                    <i class="fa fa-linkedin"></i>
                                </span>
                            </p>


                        </div>

                        <div class="col-4">
                            <p class="text-white fs-3 px-2">THE DON PEPPE <br>
                                CREW FIRST AND <br>
                                FOREMOST <br>
                                VALUES AN <br>
                                AUTHENTIC, <br>
                                WELL BAKED <br>
                                SLICE OF PIZZA.
                            </p>

                            <img class="mymargin pl-3" src="/public/img/footer-bottom-img.png" alt="">
                        </div>

                    </div>

                </div>

                <div class="col-6">
                    <img class="w-100" src="/img/footer-img-1.jpg" alt="">
                </div>
            </div>

        </div>
    </footer>
</template>
  
  <style>
  .btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
  }
  
  .mybgimgred {
    background-image: url(./public/img/h3-background-img-3.jpg);
    background-size: cover;
    height: 14rem;
  }
  .mystarbg{
    background-image: url(./public/img/cielostellato.png);
    background-position: contain;
    
    height: 100%;
  }
  
  .h-100 {
    height: 100% !important;
  }

  .goldentext{
    color: #B7903C;
    font-size: 20px;
    font-weight: bold;
  }

  i{
    color: white;
    margin: 0 5px;
  }

  .mymargin{
    margin-top: 200px;
  }
  </style>