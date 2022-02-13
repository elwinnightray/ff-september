$(".rotate-btn-1, .rotate-btn-2").hover(
    function () {

    $(".one").addClass("ani_01");
    $(".two").addClass("ani_02");
    $(".three").addClass("ani_03");
    $(".four").addClass("ani_04");
    },

    function () {

    $(".one").removeClass("ani_01");
    $(".two").removeClass("ani_02");
    $(".three").removeClass("ani_03");
    $(".four").removeClass("ani_04");
    }
);
