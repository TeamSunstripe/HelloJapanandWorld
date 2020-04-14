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
      },
      /// CSS3
      {
        title : "CSS3",
        href : "/CSS3/index.html",
        img : "css_icon.png",
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
        href : "JavaScript/index.html",
        img : "javascript_icon.png",
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
        href : "iOS/ObjectiveC/index.html",
        img : "ios_objectivec_icon.png",
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

var ObjectiveCDocumentList = [];

function createObjectiveCDocumentList(baseDir,imgDir) {
  ObjectiveCDocumentList = [
    // App Frameworks
    {
      header:{
        title:"App Frameworks",
      },
      items:[
        {
          title:"App Frameworks",
        article:[
        {
          title:"AppKit",
          href: baseDir + "appkit.html",
          appleURL:"https://developer.apple.com/documentation/appkit?language=objc",
          details:"macOSアプリ用のグラフィカルなイベント駆動型ユーザーインターフェイスを構築して管理します。",
        },
        {
          title:"Bundle Resources",
          href:baseDir + "index.html#BundleResources"
        },
        {
          title:"Foundation",
          href:baseDir + "foundation.html",
          appleURL:"https://developer.apple.com/documentation/foundation?language=objc",
          details:"重要なデータ型、コレクション、オペレーティングシステムサービスにアクセスして、アプリの機能の基本レイヤーを定義します。",
        },
        {title:"Swift",href:baseDir + "index.html#Swift"},
        {title:"SwiftUI",href:baseDir + "index.html#SwiftUI"},
        {title:"TVML",href:baseDir + "index.html#TVML"},
        {title:"TVMLKit",href:baseDir + "index.html#TVMLKit"},
        {title:"TVMLKit JS",href:baseDir + "index.html#TVMLKitJS"},
        {title:"TVUIKit",href:baseDir + "index.html#TVUIKit"},
        {title:"UIKit",href:baseDir + "index.html#UIKit"},
        {title:"WatchKit",href:baseDir + "index.html#WatchKit"},
      ],
      },
      ],
    },
    // App Frameworks
    // Graphics and Games
    {
      header:{
        title:"Graphics and Games",
      },
      items:[
        {
          title:"Graphics and Games",
        article:[
        {title:"AGL",href:baseDir + "index.html#AGL"},
        {title:"ARKit",href:baseDir + "index.html#ARKit"},
        {title:"ColorSync",href:baseDir + "index.html#ColorSync"},
        {title:"Core Animation",href:baseDir + "index.html#CoreAnimation"},
        {title:"Core Graphics",href:baseDir + "index.html#CoreGraphics"},
        {title:"Core Image",href:baseDir + "index.html#CoreImage"},
        {title:"Game Controller",href:baseDir + "index.html#GameController"},
        {title:"GameKit",href:baseDir + "index.html#GameKit"},
        {title:"GameplayKit",href:baseDir + "index.html#GameplayKit"},
        {title:"GLKit",href:baseDir + "index.html#GLKit"},
        {title:"Image I/O",href:baseDir + "index.html#ImageI/O"},
        {title:"Metal",href:baseDir + "index.html#Metal"},
        {title:"Metal Performance Shaders",href:baseDir + "index.html#MetalPerformanceShaders"},
        {title:"MetalKit",href:baseDir + "index.html#MetalKit"},
        {title:"Model I/O",href:baseDir + "index.html#ModelI/O"},
        {title:"OpenGL ES",href:baseDir + "index.html#OpenGLES"},
        {title:"PDFKit",href:baseDir + "index.html#PDFKit"},
        {title:"PencilKit",href:baseDir + "index.html#PencilKit"},
        {title:"Quartz",href:baseDir + "index.html#Quartz"},
        {title:"RealityKit",href:baseDir + "index.html#RealityKit"},
        {title:"ReplayKit",href:baseDir + "index.html#ReplayKit"},
        {title:"SceneKit",href:baseDir + "index.html#SceneKit"},
        {title:"SpriteKit",href:baseDir + "index.html#SpriteKit"},
        {title:"Vision",href:baseDir + "index.html#Vision"},
      ],
      },
      ],
    },
    // Graphics and Games
    // App Services
    {
      header:{
        title:"App Services",
      },
      items:[
        {
          title:"App Services",
        article:[
        {title:"Accounts",href:baseDir + "index.html#Accounts"},
        {title:"AddressBook",href:baseDir + "index.html#AddressBook"},
        {title:"AddressBookUI",href:baseDir + "index.html#AddressBookUI"},
        {title:"AdSupport",href:baseDir + "index.html#AdSupport"},
        {title:"App Store Receipts",href:baseDir + "index.html#AppStoreReceipts"},
        {title:"App Store Server Notifications",href:baseDir + "index.html#AppStoreServerNotifications"},
        {title:"ApplicationServices",href:baseDir + "index.html#ApplicationServices"},
        {title:"AutomaticAssessmentConfiguration",href:baseDir + "index.html#AutomaticAssessmentConfiguration"},
        {title:"BackgroundTasks",href:baseDir + "index.html#BackgroundTasks"},
        {title:"Business Chat",href:baseDir + "index.html#BusinessChat"},
        {title:"Business Chat REST API",href:baseDir + "index.html#BusinessChatRESTAPI"},
        {title:"CallKit",href:baseDir + "index.html#CallKit"},
        {title:"CareKit",href:baseDir + "index.html#CareKit"},
        {title:"CarPlay",href:baseDir + "index.html#CarPlay"},
        {title:"ClassKit",href:baseDir + "index.html#ClassKit"},
        {title:"ClockKit",href:baseDir + "index.html#ClockKit"},
        {title:"CloudKit",href:baseDir + "index.html#CloudKit"},
        {title:"Combine",href:baseDir + "index.html#Combine"},
        {title:"Contacts",href:baseDir + "index.html#Contacts"},
        {title:"ContactsUI",href:baseDir + "index.html#ContactsUI"},
        {title:"Core Data",href:baseDir + "index.html#CoreData"},
        {title:"Core Foundation",href:baseDir + "index.html#CoreFoundation"},
        {title:"Core Location",href:baseDir + "index.html#CoreLocation"},
        {title:"Core ML",href:baseDir + "index.html#CoreML"},
        {title:"Core Motion",href:baseDir + "index.html#CoreMotion"},
        {title:"Core Spotlight",href:baseDir + "index.html#CoreSpotlight"},
        {title:"Core Text",href:baseDir + "index.html#CoreText"},
        {title:"Create ML",href:baseDir + "index.html#CreateML"},
        {title:"DeviceCheck",href:baseDir + "index.html#DeviceCheck"},
        {title:"EventKit",href:baseDir + "index.html#EventKit"},
        {title:"EventKitUI",href:baseDir + "index.html#EventKitUI"},
        {title:"FileProvider",href:baseDir + "index.html#FileProvider"},
        {title:"FileProviderUI",href:baseDir + "index.html#FileProviderUI"},
        {title:"HealthKit",href:baseDir + "index.html#HealthKit"},
        {title:"HomeKit",href:baseDir + "index.html#HomeKit"},
        {title:"iAd",href:baseDir + "index.html#iAd"},
        {title:"JavaScriptCore",href:baseDir + "index.html#JavaScriptCore"},
        {title:"MapKit",href:baseDir + "index.html#MapKit"},
        {title:"Messages",href:baseDir + "index.html#Messages"},
        {title:"MessageUI",href:baseDir + "index.html#MessageUI"},
        {title:"MultipeerConnectivity",href:baseDir + "index.html#MultipeerConnectivity"},
        {title:"Natural Language",href:baseDir + "index.html#NaturalLanguage"},
        {title:"NewsstandKit",href:baseDir + "index.html#NewsstandKit"},
        {title:"NotificationCenter",href:baseDir + "index.html#NotificationCenter"},
        {title:"PassKit (Apple Pay and Wallet)",href:baseDir + "index.html#PassKit"},
        {title:"PreferencePanes",href:baseDir + "index.html#PreferencePanes"},
        {title:"PushKit",href:baseDir + "index.html#PushKit"},
        {title:"QuickLook",href:baseDir + "index.html#QuickLook"},
        {title:"QuickLookThumbnailing",href:baseDir + "index.html#QuickLookThumbnailing"},
        {title:"SafariServices",href:baseDir + "index.html#SafariServices"},
        {title:"SiriKit",href:baseDir + "index.html#SiriKit"},
        {title:"SMS and Call Reporting",href:baseDir + "index.html#SMSandCallReporting"},
        {title:"Social",href:baseDir + "index.html#Social"},
        {title:"Speech",href:baseDir + "index.html#Speech"},
        {title:"StoreKit",href:baseDir + "index.html#StoreKit"},
        {title:"TVServices",href:baseDir + "index.html#TVServices"},
        {title:"UserNotifications",href:baseDir + "index.html#UserNotifications"},
        {title:"UserNotificationsUI",href:baseDir + "index.html#UserNotificationsUI"},
        {title:"Wallet Passes",href:baseDir + "index.html#WalletPasses"},
        {title:"WatchConnectivity",href:baseDir + "index.html#WatchConnectivity"},
        {title:"WebKit",href:baseDir + "index.html#WebKit"},
      ],
      },
      ],
    },
    // App Services
    // Media
    {
      header:{
        title:"Media",
      },
      items:[
        {
          title:"Media",
        article:[
        {title:"Apple News",href:baseDir + "index.html#AppleNews"},
        {title:"Apple Search Ads",href:baseDir + "index.html#AppleSearchAds"},
        {title:"AssetsLibrary",href:baseDir + "index.html#AssetsLibrary"},
        {title:"AudioToolbox",href:baseDir + "index.html#AudioToolbox"},
        {title:"AudioUnit",href:baseDir + "index.html#AudioUnit"},
        {title:"AVFoundation",href:baseDir + "index.html#AVFoundation"},
        {title:"AVKit",href:baseDir + "index.html#AVKit"},
        {title:"Core Audio",href:baseDir + "index.html#CoreAudio"},
        {title:"Core Audio Kit",href:baseDir + "index.html#CoreAudioKit"},
        {title:"Core Audio Types",href:baseDir + "index.html#CoreAudioTypes"},
        {title:"Core Haptics",href:baseDir + "index.html#CoreHaptics"},
        {title:"Core Media",href:baseDir + "index.html#CoreMedia"},
        {title:"Core MIDI",href:baseDir + "index.html#CoreMIDI"},
        {title:"Core Video",href:baseDir + "index.html#CoreVideo"},
        {title:"HTTP Live Streaming",href:baseDir + "index.html#HTTPLiveStreaming"},
        {title:"ImageCaptureCore",href:baseDir + "index.html#ImageCaptureCore"},
        {title:"iTunesLibrary",href:baseDir + "index.html#iTunesLibrary"},
        {title:"Media Player",href:baseDir + "index.html#MediaPlayer"},
        {title:"MediaAccessibility",href:baseDir + "index.html#MediaAccessibility"},
        {title:"MediaLibrary",href:baseDir + "index.html#MediaLibrary"},
        {title:"PhotoKit",href:baseDir + "index.html#PhotoKit"},
        {title:"Professional Video Applications",href:baseDir + "index.html#ProfessionalVideoApplications"},
        {title:"QTKit",href:baseDir + "index.html#QTKit"},
        {title:"ScreenSaver",href:baseDir + "index.html#ScreenSaver"},
        {title:"SoundAnalysis",href:baseDir + "index.html#SoundAnalysis"},
        {title:"VideoToolbox",href:baseDir + "index.html#VideoToolbox"},
        {title:"VisionKit",href:baseDir + "index.html#VisionKit"},
      ],
      },
      ],
    },
    // Media
    // Web
    {
      header:{
        title:"Web",
      },
      items:[
        {
          title:"Web",
        article:[
        {title:"App Store Connect API",href:baseDir + "index.html#AppStoreConnectAPI"},
        {title:"Apple Music API",href:baseDir + "index.html#AppleMusicAPI"},
        {title:"Apple Pay on the Web",href:baseDir + "index.html#ApplePayontheWeb"},
        {title:"CloudKit JS",href:baseDir + "index.html#CloudKitJS"},
        {title:"LinkPresentation",href:baseDir + "index.html#LinkPresentation"},
        {title:"LivePhotosKit JS",href:baseDir + "index.html#LivePhotosKitJS"},
        {title:"MapKit JS",href:baseDir + "index.html#MapKitJS"},
        {title:"Maps Web Snapshots",href:baseDir + "index.html#MapsWebSnapshots"},
        {title:"Beta",href:baseDir + "index.html#Beta"},
        {title:"MusicKit JS",href:baseDir + "index.html#MusicKitJS"},
        {title:"Safari Extensions JS",href:baseDir + "index.html#SafariExtensionsJS"},
        {title:"Sign in with Apple",href:baseDir + "index.html#SigninwithApple"},
        {title:"WebKit JS",href:baseDir + "index.html#WebKitJS"},
      ],
      },
      ],
    },
    // Web
    // Developer Tools
    {
      header:{
        title:"Developer Tools",
      },
      items:[
        {
          title:"Developer Tools",
        article:[
        {title:"Automator",href:baseDir + "index.html#Automator"},
        {title:"Code Diagnostics",href:baseDir + "index.html#CodeDiagnostics"},
        {title:"InstallerJS",href:baseDir + "index.html#InstallerJS"},
        {title:"Playground Support",href:baseDir + "index.html#PlaygroundSupport"},
        {title:"PlaygroundBluetooth",href:baseDir + "index.html#PlaygroundBluetooth"},
        {title:"ScriptingBridge",href:baseDir + "index.html#ScriptingBridge"},
        {title:"Swift Packages",href:baseDir + "index.html#SwiftPackages"},
        {title:"Swift Playgrounds",href:baseDir + "index.html#SwiftPlaygrounds"},
        {title:"Xcode",href:baseDir + "index.html#Xcode"},
        {title:"XcodeKit",href:baseDir + "index.html#XcodeKit"},
        {title:"xcselect",href:baseDir + "index.html#xcselect"},
        {title:"XCTest",href:baseDir + "index.html#XCTest"},
      ],
      },
      ],
    },
    // Developer Tools
    // System
    {
      header:{
        title:"System",
      },
      items:[
        {
          title:"System",
        article:[
        {title:"Accelerate",href:baseDir + "index.html#Accelerate"},
        {title:"Apple CryptoKit",href:baseDir + "index.html#AppleCryptoKit"},
        {title:"AuthenticationServices",href:baseDir + "index.html#AuthenticationServices"},
        {title:"CFNetwork",href:baseDir + "index.html#CFNetwork"},
        {title:"Collaboration",href:baseDir + "index.html#Collaboration"},
        {title:"Compression",href:baseDir + "index.html#Compression"},
        {title:"Core Bluetooth",href:baseDir + "index.html#CoreBluetooth"},
        {title:"Core NFC",href:baseDir + "index.html#CoreNFC"},
        {title:"Core Services",href:baseDir + "index.html#CoreServices"},
        {title:"Core Telephony",href:baseDir + "index.html#CoreTelephony"},
        {title:"Core WLAN",href:baseDir + "index.html#CoreWLAN"},
        {title:"CryptoTokenKit",href:baseDir + "index.html#CryptoTokenKit"},
        {title:"DarwinNotify",href:baseDir + "index.html#DarwinNotify"},
        {title:"Device Management",href:baseDir + "index.html#DeviceManagement"},
        {title:"DiskArbitration",href:baseDir + "index.html#DiskArbitration"},
        {title:"Dispatch",href:baseDir + "index.html#Dispatch"},
        {title:"dnssd",href:baseDir + "index.html#dnssd"},
        {title:"DriverKit",href:baseDir + "index.html#DriverKit"},
        {title:"EndpointSecurity",href:baseDir + "index.html#EndpointSecurity"},
        {title:"ExceptionHandling",href:baseDir + "index.html#ExceptionHandling"},
        {title:"ExecutionPolicy",href:baseDir + "index.html#ExecutionPolicy"},
        {title:"ExternalAccessory",href:baseDir + "index.html#ExternalAccessory"},
        {title:"FinderSync",href:baseDir + "index.html#FinderSync"},
        {title:"ForceFeedback",href:baseDir + "index.html#ForceFeedback"},
        {title:"FWAUserLib",href:baseDir + "index.html#FWAUserLib"},
        {title:"GSS",href:baseDir + "index.html#GSS"},
        {title:"HIDDriverKit",href:baseDir + "index.html#HIDDriverKit"},
        {title:"Hypervisor",href:baseDir + "index.html#Hypervisor"},
        {title:"InputMethodKit",href:baseDir + "index.html#InputMethodKit"},
        {title:"IOBluetooth",href:baseDir + "index.html#IOBluetooth"},
        {title:"IOBluetoothUI",href:baseDir + "index.html#IOBluetoothUI"},
        {title:"IOKit",href:baseDir + "index.html#IOKit"},
        {title:"IOSurface",href:baseDir + "index.html#IOSurface"},
        {title:"IOUSBHost",href:baseDir + "index.html#IOUSBHost"},
        {title:"Kernel",href:baseDir + "index.html#Kernel"},
        {title:"LatentSemanticMapping",href:baseDir + "index.html#LatentSemanticMapping"},
        {title:"LocalAuthentication",href:baseDir + "index.html#LocalAuthentication"},
        {title:"MetricKit",href:baseDir + "index.html#MetricKit"},
        {title:"MobileCoreServices",href:baseDir + "index.html#MobileCoreServices"},
        {title:"Network",href:baseDir + "index.html#Network"},
        {title:"NetworkExtension",href:baseDir + "index.html#NetworkExtension"},
        {title:"NetworkingDriverKit",href:baseDir + "index.html#NetworkingDriverKit"},
        {title:"Objective-C Runtime",href:baseDir + "index.html#Objective-CRuntime"},
        {title:"OpenDirectory",href:baseDir + "index.html#OpenDirectory"},
        {title:"os",href:baseDir + "index.html#os"},
        {title:"OSLog",href:baseDir + "index.html#OSLog"},
        {title:"PCIDriverKit",href:baseDir + "index.html#PCIDriverKit"},
        {title:"Security",href:baseDir + "index.html#Security"},
        {title:"SecurityFoundation",href:baseDir + "index.html#SecurityFoundation"},
        {title:"SecurityInterface",href:baseDir + "index.html#SecurityInterface"},
        {title:"SerialDriverKit",href:baseDir + "index.html#SerialDriverKit"},
        {title:"ServiceManagement",href:baseDir + "index.html#ServiceManagement"},
        {title:"simd",href:baseDir + "index.html#simd"},
        {title:"SystemConfiguration",href:baseDir + "index.html#SystemConfiguration"},
        {title:"SystemExtensions",href:baseDir + "index.html#SystemExtensions"},
        {title:"USBDriverKit",href:baseDir + "index.html#USBDriverKit"},
        {title:"USBSerialDriverKit",href:baseDir + "index.html#USBSerialDriverKit"},
        {title:"vmnet",href:baseDir + "index.html#vmnet"},
        {title:"XPC",href:baseDir + "index.html#XPC"},
      ],
      },
      ],
    },
    // System
    // Release Notes
    {
      header:{
        title:"Release Notes",
      },
      items:[
        {
          title:"Release Notes",
        article:[
        {title:"iOS & iPadOS Release Notes",href:baseDir + "index.html#iOS&iPadOSReleaseNotes"},
        {title:"macOS Release Notes",href:baseDir + "index.html#macOSReleaseNotes"},
        {title:"Safari Release Notes",href:baseDir + "index.html#SafariReleaseNotes"},
        {title:"tvOS Release Notes",href:baseDir + "index.html#tvOSReleaseNotes"},
        {title:"watchOS Release Notes",href:baseDir + "index.html#watchOSReleaseNotes"},
        {title:"Xcode Release Notes",href:baseDir + "index.html#XcodeReleaseNotes"},
      ],
      },
      ],
    },
    // Release Notes
    // Resources
    {
      header:{
        title:"Resources",
      },
      items:[
        {
          title:"Resources",
        article:[
        {title:"Human Interface Guidelines",href:baseDir + "index.html#HumanInterfaceGuidelines"},
        {title:"Documentation Archive",href:baseDir + "index.html#DocumentationArchive"},
        {title:"Videos",href:baseDir + "index.html#Videos"},
      ],
      },
      ],
    },
    // Resources
  ];
}

var ObjectiveCFoundationList = [];

function createObjectiveCFoundationList(baseDir,imgDir) {
  ObjectiveCFoundationList = [
    /// appkit
    {
      identifier:"Topics",
      header:{
        title:"Topics",
        base:"appkit",
        appleURL:"https://developer.apple.com/documentation/appkit/accessibility?language=objc",
      },
      items:[
        ///Type Properties
        {
          title:"Data Types",
          article:[
            {
              title:"NSTextCheckingAirlineKey",
              href:baseDir + "nstextcheckingairlinekey.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nstextcheckingairlinekey?language=objc",
              description:"トランジット結果の航空会社に対応するキー。",
              details:"A key that corresponds to the airline of a transit result.",
            },
          ],
        },
      ],// items
    },
    /// appkit
    /// task_management
    {
      title:"Task Management",
      identifier:"Topics",
      header:{
        title:"Topics",
        base:"task_management",
        appleURL:"https://developer.apple.com/documentation/foundation/task_management?language=objc",
        description:"アプリの作業と、ハンドオフやショートカットなどのシステムサービスとの相互作用を管理します。",
        details:"Manage your app’s work and how it interacts with system services like Handoff and Shortcuts.",
      },
      items:[
        /// Undo
        {
          title:"Undo",
          article:[
            {
              title:"NSUndoManager",
              href:baseDir + "nsundomanager.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nsundomanager?language=objc",
              description:"A general-purpose recorder of operations that enables undo and redo.",
              details:"A general-purpose recorder of operations that enables undo and redo.",
            },
          ],
        },
        /// Progress
        {
          title:"Progress",
          article:[
            {
              title:"NSProgressReporting",
              href:baseDir + "nsprogressreporting.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nsprogressreporting?language=objc",
              description:"An interface for objects that report progress using a single progress instance.",
              details:"An interface for objects that report progress using a single progress instance.",
            },
            {
              title:"NSProgress",
              href:baseDir + "nsprogress.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nsprogress?language=objc",
              description:"An object that conveys ongoing progress for a given task to the user.",
              details:"An object that conveys ongoing progress for a given task to the user.",
            },
          ],
        },
        /// Operations
        {
          title:"Operations",
          article:[
            {
              title:"NSOperation",
              href:baseDir + "nsoperation.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nsoperation?language=objc",
              description:"An abstract class that represents the code and data associated with a single task.",
              details:"An abstract class that represents the code and data associated with a single task.",
            },
            {
              title:"NSOperationQueue",
              href:baseDir + "nsoperationqueue.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nsoperationqueue?language=objc",
              description:"A queue that regulates the execution of operations.",
              details:"A queue that regulates the execution of operations.",
            },
            {
              title:"NSBlockOperation",
              href:baseDir + "nsblockoperation.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nsblockoperation?language=objc",
              description:"An operation that manages the concurrent execution of one or more blocks.",
              details:"An operation that manages the concurrent execution of one or more blocks.",
            },
            {
              title:"NSInvocationOperation",
              href:baseDir + "nsinvocationoperation.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nsinvocationoperation?language=objc",
              description:"An operation that manages the execution of a single encapsulated task specified as an invocation.",
              details:"An operation that manages the execution of a single encapsulated task specified as an invocation.",
            },
          ],
        },
        /// Scheduling
        {
          title:"Scheduling",
          article:[
            {
              title:"NSTimer",
              href:baseDir + "nstimer.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nstimer?language=objc",
              description:"A timer that fires after a certain time interval has elapsed, sending a specified message to a target object.",
              details:"A timer that fires after a certain time interval has elapsed, sending a specified message to a target object.",
            },
          ],
        },
        /// Activity Sharing
        {
          title:"Activity Sharing",
          description:"Share the user’s current activity with Handoff, Spotlight, and Siri Shortcuts.",
          details:"Share the user’s current activity with Handoff, Spotlight, and Siri Shortcuts.",
          article:[
            {
              title:"Increasing App Usage with Suggestions Based on User Activities",
              href:baseDir + "task_management/" + "increasing_app_usage_with_suggestions_based_on_user_activities.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/task_management/increasing_app_usage_with_suggestions_based_on_user_activities?language=objc",
              description:"Provide a continuous user experience by capturing information from your app and displaying this information as proactive suggestions across the system.",
              details:"Provide a continuous user experience by capturing information from your app and displaying this information as proactive suggestions across the system.",
            },
            {
              title:"Implementing Handoff in Your App",
              href:baseDir + "task_management/" + "implementing_handoff_in_your_app.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/task_management/implementing_handoff_in_your_app?language=objc",
              description:"Create, send, and receive user activities directly.",
              details:"Create, send, and receive user activities directly.",
            },
            {
              title:"NSUserActivity",
              href:baseDir + "nsuseractivity.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nsuseractivity?language=objc",
              description:"A representation of the state of your app at a moment in time.",
              details:"A representation of the state of your app at a moment in time.",
            },
            {
              title:"NSUserActivityDelegate",
              href:baseDir + "nsuseractivitydelegate.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nsuseractivitydelegate?language=objc",
              description:"The interface through which a user activity instance notifies its delegate of updates.",
              details:"The interface through which a user activity instance notifies its delegate of updates.",
            },
          ],
        },
        /// System Interaction
        {
          title:"System Interaction",
          article:[
            {
              title:"NSProcessInfo",
              href:baseDir + "nsprocessinfo.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nsprocessinfo?language=objc",
              description:"A collection of information about the current process.",
              details:"A collection of information about the current process.",
            },
            {
              title:"NSBackgroundActivityScheduler",
              href:baseDir + "nsbackgroundactivityscheduler.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nsbackgroundactivityscheduler?language=objc",
              description:"A task scheduler suitable for low priority operations that can run in the background.",
              details:"A task scheduler suitable for low priority operations that can run in the background.",
            },
          ],
        },
        /// User Notifications
        {
          title:"User Notifications",
          article:[
            {
              title:"NSUserNotification",
              href:baseDir + "nsusernotification.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nsusernotification?language=objc",
              description:"A notification that can be scheduled for display in the notification center.",
              details:"A notification that can be scheduled for display in the notification center.",
              deprecated:"Deprecated",
            },
            {
              title:"NSUserNotificationAction",
              href:baseDir + "nsusernotificationaction.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nsusernotificationaction?language=objc",
              description:"An action that the user can take in response to receiving a notification.",
              details:"An action that the user can take in response to receiving a notification.",
            },
            {
              title:"NSUserNotificationCenter",
              href:baseDir + "nsusernotificationcenter.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nsusernotificationcenter?language=objc",
              description:"An object that delivers notifications from apps to the user.",
              details:"An object that delivers notifications from apps to the user.",
              deprecated:"Deprecated",
            },
            {
              title:"NSUserNotificationCenterDelegate",
              href:baseDir + "nsusernotificationcenterdelegate.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nsusernotificationcenterdelegate?language=objc",
              description:"An interface that enables customizing the behavior of the default notification center.",
              details:"An interface that enables customizing the behavior of the default notification center.",
            },
          ],
        },
      ],// items
    },
    /// appkit
    /// foundation_data_types
    {
      title:"Foundation Data Types",
      identifier:"Topics",
      header:{
        title:"Topics",
        base:"foundation_data_types",
        appleURL:"https://developer.apple.com/documentation/foundation/foundation_data_types?language=objc",
        description:"このドキュメントでは、Foundationフレームワークにあるデータ型と定数について説明します。",
        details:"This document describes the data types and constants found in the Foundation framework.",
      },
      items:[
        ///Data Types
        {
          title:"Data Types/データ型",
          article:[
            {
              title:"NSTextCheckingKey",
              type:"Type Alias/別名定義",
              href:baseDir + "nstextcheckingkey.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nstextcheckingkey?language=objc",
              description:"概要はありません。",
              details:"No overview available.",
            },
            {
              title:"NSUserActivityPersistentIdentifier",
              type:"Type Alias/別名定義",
              href:baseDir + "nsuseractivitypersistentidentifier.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nsuseractivitypersistentidentifier?language=objc",
              description:"ユーザーアクティビティの永続的な識別子の値を定義するタイプ。",
              details:"The type that defines a persistent identifier value for a user activity.",
            },
          ],
        },
      ],// items
    },
    /// foundation_data_types
    /// nstextcheckingkey
    {
      identifier:"Topics",
      header:{
        title:"Topics",
        base:"nstextcheckingkey",
        appleURL:"https://developer.apple.com/documentation/foundation/nstextcheckingkey?language=objc",
      },
      items:[
        ///Type Properties
        {
          title:"Type Properties/タイププロパティ",
          article:[
            {
              title:"NSTextCheckingAirlineKey",
              type:"Global Variable/グローバル変数",
              href:baseDir + "nstextcheckingairlinekey.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nstextcheckingairlinekey?language=objc",
              description:"トランジット結果の航空会社に対応するキー。",
              details:"A key that corresponds to the airline of a transit result.",
            },
            {
              title:"NSTextCheckingCityKey",
              type:"Global Variable/グローバル変数",
              href:baseDir + "nstextcheckingcitykey.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nstextcheckingcitykey?language=objc",
              description:"住所の都市コンポーネントに対応するキー。",
              details:"A key that corresponds to the city component of the address.",
            },
            {
              title:"NSTextCheckingCountryKey",
              type:"Global Variable/グローバル変数",
              href:baseDir + "nstextcheckingcountrykey.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nstextcheckingcountrykey?language=objc",
              description:"住所の国コンポーネントに対応するキー。",
              details:"A key that corresponds to the country component of the address.",
            },
            {
              title:"NSTextCheckingFlightKey",
              type:"Global Variable/グローバル変数",
              href:baseDir + "nstextcheckingflightkey.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nstextcheckingflightkey?language=objc",
              description:"トランジット結果のフライトコンポーネントに対応するキー。",
              details:"A key that corresponds to the flight component of a transit result.",
            },
            {
              title:"NSTextCheckingJobTitleKey",
              type:"Global Variable/グローバル変数",
              href:baseDir + "nstextcheckingjobtitlekey.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nstextcheckingjobtitlekey?language=objc",
              description:"アドレスのジョブコンポーネントに対応するキー。",
              details:"A key that corresponds to the job component of the address.",
            },
            {
              title:"NSTextCheckingNameKey",
              type:"Global Variable/グローバル変数",
              href:baseDir + "nstextcheckingnamekey.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nstextcheckingnamekey?language=objc",
              description:"住所の名前コンポーネントに対応するキー。",
              details:"A key that corresponds to the name component of the address.",
            },
            {
              title:"NSTextCheckingOrganizationKey",
              type:"Global Variable/グローバル変数",
              href:baseDir + "nstextcheckingorganizationkey.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nstextcheckingorganizationkey?language=objc",
              description:"アドレスの組織コンポーネントに対応するキー。",
              details:"A key that corresponds to the organization component of the address.",
            },
            {
              title:"NSTextCheckingPhoneKey",
              type:"Global Variable/グローバル変数",
              href:baseDir + "nstextcheckingphonekey.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nstextcheckingphonekey?language=objc",
              description:"住所の電話番号コンポーネントに対応するキー。",
              details:"A key that corresponds to the phone number component of the address.",
            },
            {
              title:"NSTextCheckingStateKey",
              type:"Global Variable/グローバル変数",
              href:baseDir + "nstextcheckingstatekey.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nstextcheckingstatekey?language=objc",
              description:"住所の都道府県コンポーネントに対応するキー。",
              details:"A key that corresponds to the state or province component of the address.",
            },
            {
              title:"NSTextCheckingStreetKey",
              type:"Global Variable/グローバル変数",
              href:baseDir + "nstextcheckingstreetkey.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nstextcheckingstreetkey?language=objc",
              description:"住所の住所コンポーネントに対応するキー。",
              details:"A key that corresponds to the street address component of the address.",
            },
            {
              title:"NSTextCheckingZIPKey",
              type:"Global Variable/グローバル変数",
              href:baseDir + "nstextcheckingzipkey.html#main_title",
              appleURL:"https://developer.apple.com/documentation/foundation/nstextcheckingzipkey?language=objc",
              description:"住所の郵便番号コンポーネントに対応するキー。",
              details:"A key that corresponds to the zip code or postal code component of the address.",
            },
          ],
        },
      ],// items
    },
    /// nstextcheckingkey
  ];
}
