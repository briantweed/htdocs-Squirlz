<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit033aaf00e6ac19aa96819d3954d1191c
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'Pusher\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Pusher\\' => 
        array (
            0 => __DIR__ . '/..' . '/pusher/pusher-php-server/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit033aaf00e6ac19aa96819d3954d1191c::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit033aaf00e6ac19aa96819d3954d1191c::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
