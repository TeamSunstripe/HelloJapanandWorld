/// サイドメニュー

var sideNavMenus = [
  /// シェアプログラミング start
  {
    header : {
      title : "シェアプログラミング",
      img : "school.png",
    },
    items : [
      {
        title : "Howto",
        href : "howto.html",
        img : "howto_icon.png",
      },
    ],
  },
  /// シェアプログラミング end

  /// 開発について start
  {
    header : {
      title : "開発について",
      img : "school.png",
    },
    items : [
      // Git
      {
        title : "Git",
        href : "git.html",
        img : "howto_icon.png",
        hidden:true,
      },
    ],
  },
  /// 開発について end

  /// Front Side start
  {
    header : {
      title : "Front Side",
      img : "school.png",
    },
    items : [
      /// HTML
      {
        title : "HTML",
        href : "html.html",
        img : "html_icon.png",
      },
      /// CSS
      {
        title : "CSS",
        href : "css.html",
        img : "css_icon.png",
        hidden:true,
      },
      /// Bootstrap
      {
        title : "Bootstrap",
        href : "bootstrap.html",
        img : "bootstrap_icon.png",
        hidden:true,
      },
      /// Colors
      {
        title : "Colors",
        href : "colors.html",
        img : "colors_icon.png",
        hidden:true,
      },
      /// Icons
      {
        title : "Icons",
        href : "icons.html",
        img : "icons_icon.png",
        hidden:true,
      },
      /// Graphics
      {
        title : "Graphics",
        href : "graphics.html",
        img : "graphics_icon.png",
        hidden:true,
      },
      /// Sass
      {
        title : "Sass",
        href : "sass.html",
        img : "sass_icon.png",
        hidden:true,
      },
    ],
  },
  /// Front Side end
  /// JavaScript start
  {
    header : {
      title : "JavaScript",
      img : "school.png",
    },
    items : [
      /// JavaScript
      {
        title : "JavaScript",
        href : "javascript.html",
        img : "javascript_icon.png",
        hidden:true,
      },
      /// jQuery
      {
        title : "jQuery",
        href : "jquery.html",
        img : "jquery_icon.png",
        hidden:true,
      },
      /// JSON
      {
        title : "JSON",
        href : "json.html",
        img : "json_icon.png",
        hidden:true,
      },
    ],
  },
  /// JavaScript end
  /// Server Side start
  {
    header : {
      title : "Server Side",
      img : "school.png",
    },
    items : [
      /// PHP
      {
        title : "PHP",
        href : "php.html",
        img : "php_icon.png",
        hidden:true,
      },
      /// SQL
      {
        title : "SQL",
        href : "sql.html",
        img : "sql_icon.png",
        hidden:true,
      },
      /// Python
      {
        title : "Python",
        href : "Python/index.html",
        img : "python_icon.png",
      },
      /// Python
      {
        title : "Ruby",
        href : "Ruby/index.html",
        img : "ruby_icon.png",
      },
    ],
  },
  /// Server Side end
  /// iOS start
  {
    header : {
      title : "iOS",
      img : "school.png",
    },
    items : [
      // Objective-C（iOS）
      {
        title : "Objective-C（iOS）",
        href : "iOS/objectivec.html",
        img : "ios_objectivec_icon.png",
        hidden:true,
      },
      // Swift（iOS）
      {
        title : "Swift（iOS）",
        href : "iOS/swift.html",
        img : "ios_swift_icon.png",
        hidden:true,
      },
      // ShellScript
      {
        title : "ShellScript",
        href : "ShellScript/index.html",
        img : "ios_shellscript_icon.png",
      },

    ],
  },
  /// iOS end
  /// Android start
  {
    header : {
      title : "Android",
      img : "school.png",
    },
    items : [
      // Java（Android）
      {
        title : "Java（Android）",
        href : "Android/java.html",
        img : "android_java_icon.png",
        hidden:true,
      },
    ],
  },
  /// Android end
  /// Programming start
  {
    header : {
      title : "Programming",
      img : "school.png",
    },
    items : [
      // C言語
      {
        title : "C言語",
        href : "c.html",
        img : "c_icon.png",
        hidden:true,
      },
      // C++
      {
        title : "C++",
        href : "cpp.html",
        img : "cpp_icon.png",
        hidden:true,
      },
      // C#
      {
        title : "C#",
        href : "cs.html",
        img : "cs_icon.png",
        hidden:true,
      },
    ],
  },
  /// Programming end
];

/// SDGs

var slide_show_image_files = [
  {
    title:"貧困をなくそう",
    img:"sdg-cover-en-1c.png",
    icon:"sdg-ja-01.png",
  },
  {
    title:"飢餓をゼロに",
    img:"sdg-cover-en-2b.png",
    icon:"sdg-ja-02.png",
  },
  {
    title:"すべての人に健康と福祉を",
    img:"sdg-cover-en-3a.png",
    icon:"sdg-ja-03.png",
  },
  {
    title:"質の高い教育をみんなに",
    img:"sdg-cover-en-4a.png",
    icon:"sdg-ja-04.png",
  },
  {
    title:"ジェンダー平等を実現しよう",
    img:"sdg-cover-en-5a.png",
    icon:"sdg-ja-05.png",
  },
  {
    title:"安全な水とトイレを世界中に",
    img:"sdg-cover-en-6a.png",
    icon:"sdg-ja-06.png",
  },
  {
    title:"エネルギーをみんなに、そしてクリーンに",
    img:"sdg-cover-en-7a.png",
    icon:"sdg-ja-07.png",
  },
  {
    title:"働きがいも経済成長も",
    img:"sdg-cover-en-8b.png",
    icon:"sdg-ja-08.png",
  },
  {
    title:"産業と技術革新の基盤をつくろう",
    img:"sdg-cover-en-9a.png",
    icon:"sdg-ja-09.png",
  },
  {
    title:"人や国の不平等をなくそう",
    img:"sdg-cover-en-10a.png",
    icon:"sdg-ja-10.png",
  },
  {
    title:"住み続けられるまちづくりを",
    img:"sdg-cover-en-11a.png",
    icon:"sdg-ja-11.png",
  },
  {
    title:"つくる責任、つかう責任",
    img:"sdg-cover-en-12b.png",
    icon:"sdg-ja-12.png",
  },
  {
    title:"気候変動に具体的な対策を",
    img:"sdg-cover-en-13a.png",
    icon:"sdg-ja-13.png",
  },
  {
    title:"海の豊かさを守ろう",
    img:"sdg-cover-en-14b.png",
    icon:"sdg-ja-14.png",
  },
  {
    title:"陸の豊かさも守ろう",
    img:"sdg-cover-en-15b.png",
    icon:"sdg-ja-15.png",
  },
  {
    title:"平和と公正をすべての人に",
    img:"sdg-cover-en-16a.png",
    icon:"sdg-ja-16.png",
  },
  {
    title:"パートナーシップで目標を達成しよう",
    img:"sdg-cover-en-17a.png",
    icon:"sdg-ja-17.png",
  },
];
