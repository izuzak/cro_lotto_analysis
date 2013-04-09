# Introduction

This is a Web application that analyzes and displays the randomness in two Croatian lottery systems: the 6/45 and 7/39 system. The application graphically displays the frequencies and sorted frequencies for drawn numbers over a user-selected portion of the system's history. The goal of the application is to visually explore the degree of uniformity of the drawn numbers.

The second purpose of the application is provide csv-formatted data for the two analyzed systems (because the original data is in MS XLS and does not have a consistent format).

# Data

The application uses data made publicly available by the Croatian lottery [here](https://www.lutrija.hr/cms/Loto7Arhiva) (for 7/39) and [here](https://www.lutrija.hr/cms/Loto6Arhiva) (for 6/45). The equivalent csv-formatted data is made available in this repository [here](7_39.txt) (for 7/39) and [here](6_45.txt) (for 6/45).

# License

The **application** is developed by [Ivan Zuzak](http://ivanzuzak.info) and licensed under the [Apache 2.0 License](https://github.com/izuzak/cro_lotto_analysis/blob/master/LICENSE.markdown). I have no claim over the **data** provided by the Croatian lottery.

# Credits

The application was built with [jQuery](https://github.com/jquery/jquery), the [gRaphael](http://g.raphaeljs.com/) for drawing graphs and the [jQRangeSlider jQuery plugin](https://github.com/ghusse/jQRangeSlider) for choosing time ranges.
