if( !window.jQuery ) {
    define(['console', 'libs/jquery/jquery_1_8_2'], function (Console) {
        Console.group("Entering jQuery module.");
        Console.info("jQuery: ", $);
        Console.groupEnd();
        return $;
    });
}