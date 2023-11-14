import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
// -------- data -------- //
const quickAccess = [
  { title: 'Arrows', url: 'arrows' },
  { title: 'Brand Logos', url: 'brand-logos' },
  { title: 'Business', url: 'business' },
  { title: 'Chat', url: 'chat' },
  { title: 'Cloud and Web', url: 'cloud-web' },
  { title: 'Communication', url: 'communication' },
  { title: 'Construction', url: 'construction' },
  { title: 'Content', url: 'content' },
  { title: 'Design Tools', url: 'design-tools' },
  { title: 'Devices', url: 'devices' },
  { title: 'Education', url: 'education' },
  { title: 'Emoji', url: 'emoji' },
  { title: 'File and Folder', url: 'file-folder' },
  { title: 'Location and Map', url: 'location-map' },
  { title: 'Medical', url: 'medical' },
  { title: 'Multimedia', url: 'multimedia' },
  { title: 'Photography Tools', url: 'photo-tools' },
  { title: 'Security', url: 'security' },
  { title: 'Shape', url: 'shape' },
  { title: 'Shopping', url: 'shopping' },
  { title: 'Sign and Symbol', url: 'sign-symbol' },
  { title: 'Sports', url: 'sports' },
  { title: 'Time', url: 'time' },
  { title: 'Transport', url: 'transport' },
  { title: 'User Interface', url: 'user-interface' },
  { title: 'Users', url: 'users' },
  { title: 'Weather', url: 'weather' }
];

const iconObj = {
  arrows: [
    'align-center-h',
    'align-center-v',
    'angle-double-down',
    'angle-double-left',
    'angle-double-right',
    'angle-double-up',
    'angle-down',
    'angle-left',
    'angle-left-b',
    'angle-right',
    'angle-right-b',
    'angle-up',
    'arrow',
    'arrow-break',
    'arrow-circle-down',
    'arrow-circle-left',
    'arrow-circle-right',
    'arrow-circle-up',
    'arrow-compress-h',
    'arrow-down',
    'arrow-down-left',
    'arrow-down-right',
    'arrow-from-right',
    'arrow-from-top',
    'arrow-growth',
    'arrow-left',
    'arrow-random',
    'arrow-resize-diagonal',
    'arrow-right',
    'arrow-to-bottom',
    'arrow-to-right',
    'arrow-up',
    'arrow-up-left',
    'arrow-up-right',
    'arrows-h',
    'arrows-h-alt',
    'arrows-left-down',
    'arrows-maximize',
    'arrows-merge',
    'arrows-resize',
    'arrows-resize-h',
    'arrows-resize-v',
    'arrows-right-down',
    'arrows-shrink-h',
    'arrows-shrink-v',
    'arrows-up-right',
    'arrows-v',
    'arrows-v-alt',
    'caret-right',
    'chart-down',
    'compress-alt',
    'compress-alt-left',
    'compress-arrows',
    'compress-point',
    'corner-down-left',
    'corner-down-right',
    'corner-down-right-alt',
    'corner-left-down',
    'corner-right-down',
    'corner-up-left',
    'corner-up-left-alt',
    'corner-up-right',
    'corner-up-right-alt',
    'direction',
    'download-alt',
    'enter',
    'exchange',
    'exchange-alt',
    'expand-alt',
    'expand-arrows',
    'expand-arrows-alt',
    'expand-from-corner',
    'expand-left',
    'expand-right',
    'export',
    'import',
    'left-arrow-from-left',
    'left-arrow-to-left',
    'maximize-left',
    'scaling-left',
    'scaling-right',
    'scroll',
    'scroll-h',
    'shuffle',
    'sort',
    'sorting',
    'top-arrow-from-top',
    'top-arrow-to-top',
    'upload-alt'
  ],
  brand: [
    '500px',
    'adobe',
    'adobe-alt',
    'amazon',
    'android',
    'android-alt',
    'apple',
    'apple-alt',
    'behance',
    'behance-alt',
    'bing',
    'bitcoin',
    'bitcoin-alt',
    'black-berry',
    'blogger',
    'blogger-alt',
    'css3-simple',
    'discord',
    'docker',
    'dribbble',
    'dropbox',
    'facebook',
    'facebook-f',
    'facebook-messenger',
    'facebook-messenger-alt',
    'github',
    'github-alt',
    'gitlab',
    'google',
    'google-drive',
    'google-drive-alt',
    'google-hangouts',
    'google-hangouts-alt',
    'google-play',
    'hipchat',
    'html3',
    'html3-alt',
    'html5',
    'html5-alt',
    'instagram',
    'instagram-alt',
    'intercom',
    'intercom-alt',
    'java-script',
    'line',
    'linkedin',
    'linkedin-alt',
    'linux',
    'lottiefiles',
    'lottiefiles-alt',
    'master-card',
    'medium-m',
    'microsoft',
    'okta',
    'opera',
    'opera-alt',
    'pagelines',
    'pagerduty',
    'paypal',
    'programming-language',
    'react',
    'reddit-alien-alt',
    'skype',
    'skype-alt',
    'slack',
    'slack-alt',
    'snapchat-alt',
    'snapchat-ghost',
    'snapchat-square',
    'swiggy',
    'telegram',
    'telegram-alt',
    'tumblr',
    'tumblr-alt',
    'tumblr-square',
    'twitter',
    'twitter-alt',
    'visual-studio',
    'vk',
    'vk-alt',
    'vuejs',
    'vuejs-alt',
    'whatsapp',
    'whatsapp-alt',
    'windows',
    'wordpress',
    'wordpress-simple',
    'youtube'
  ],
  business: [
    'analysis',
    'analytics',
    'bag',
    'bag-alt',
    'bill',
    'bitcoin-circle',
    'bitcoin-sign',
    'briefcase',
    'briefcase-alt',
    'calculator-alt',
    'calendar-alt',
    'chart',
    'chart-bar',
    'chart-bar-alt',
    'chart-growth',
    'chart-growth-alt',
    'chart-line',
    'chart-pie',
    'chart-pie-alt',
    'coins',
    'comparison',
    'credit-card',
    'crosshair',
    'crosshair-alt',
    'crosshairs',
    'dollar-alt',
    'dollar-sign',
    'dollar-sign-alt',
    'euro',
    'euro-circle',
    'gold',
    'graph-bar',
    'hunting',
    'invoice',
    'lightbulb',
    'lightbulb-alt',
    'lira-sign',
    'money-bill',
    'money-bill-stack',
    'money-insert',
    'money-stack',
    'money-withdraw',
    'money-withdrawal',
    'moneybag',
    'moneybag-alt',
    'panel-add',
    'percentage',
    'pound',
    'pound-circle',
    'presentation-line',
    'puzzle-piece',
    'receipt',
    'receipt-alt',
    'rupee-sign',
    'schedule',
    'signal-alt-3',
    'sitemap',
    'suitcase',
    'suitcase-alt',
    'university',
    'usd-circle',
    'usd-square',
    'yen',
    'yen-circle'
  ]
};

const icons = [
  'chat',
  'chat-bubble-user',
  'chat-info',
  'comment',
  'comment-add',
  'comment-alt',
  'comment-alt-block',
  'comment-alt-chart-lines',
  'comment-alt-check',
  'comment-alt-dots',
  'comment-alt-download',
  'comment-alt-edit',
  'comment-alt-exclamation',
  'comment-alt-heart',
  'comment-alt-image',
  'comment-alt-info',
  'comment-alt-lines',
  'comment-alt-lock',
  'comment-alt-medical',
  'comment-alt-message',
  'comment-alt-notes',
  'comment-alt-plus',
  'comment-alt-question',
  'comment-alt-redo',
  'comment-alt-search',
  'comment-alt-share',
  'comment-alt-shield',
  'comment-alt-upload',
  'comment-alt-verify',
  'comment-block',
  'comment-chart-line',
  'comment-check',
  'comment-dots',
  'comment-download',
  'comment-edit',
  'comment-exclamation',
  'comment-heart',
  'comment-image',
  'comment-info',
  'comment-info-alt',
  'comment-lines',
  'comment-lock',
  'comment-medical',
  'comment-message',
  'comment-notes',
  'comment-plus',
  'comment-question',
  'comment-redo',
  'comment-search',
  'comment-share',
  'comment-shield',
  'comment-upload',
  'comment-verify',
  'comments',
  'comments-alt',
  'share',
  'brackets-curly',
  'browser',
  'bug',
  'channel',
  'channel-add',
  'cloud-block',
  'cloud-bookmark',
  'cloud-check',
  'cloud-computing',
  'cloud-data-connection',
  'cloud-database-tree',
  'cloud-download',
  'cloud-exclamation',
  'cloud-heart',
  'cloud-info',
  'cloud-lock',
  'cloud-question',
  'cloud-redo',
  'cloud-share',
  'cloud-shield',
  'cloud-slash',
  'cloud-times',
  'cloud-unlock',
  'cloud-upload',
  'cloud-wifi',
  'code-branch',
  'columns',
  'data-sharing',
  'database',
  'database-alt',
  'grid',
  'server',
  'server-alt',
  'server-connection',
  'server-network',
  'server-network-alt',
  'servers',
  'web-grid',
  'web-grid-alt',
  'web-section',
  'web-section-alt',
  'window',
  'window-grid',
  'window-maximize',
  'window-section',
  'calling',
  'desktop-cloud-alt',
  'envelope',
  'envelope-add',
  'envelope-alt',
  'envelope-block',
  'envelope-bookmark',
  'envelope-check',
  'envelope-download',
  'envelope-download-alt',
  'envelope-edit',
  'envelope-exclamation',
  'envelope-heart',
  'envelope-info',
  'envelope-lock',
  'envelope-minus',
  'envelope-open',
  'envelope-question',
  'envelope-receive',
  'envelope-redo',
  'envelope-search',
  'envelope-send',
  'envelope-share',
  'envelope-shield',
  'envelope-star',
  'envelope-times',
  'envelope-upload',
  'envelope-upload-alt',
  'envelopes',
  'fast-mail',
  'fast-mail-alt',
  'forwaded-call',
  'incoming-call',
  'laptop-cloud',
  'laptop-connection',
  'mailbox',
  'mailbox-alt',
  'missed-call',
  'outgoing-call',
  'phone',
  'phone-alt',
  'phone-pause',
  'phone-slash',
  'phone-times',
  'phone-volume',
  'post-stamp',
  'postcard',
  'rss-alt',
  'constructor',
  'drill',
  'hard-hat',
  'jackhammer',
  'no-entry',
  'paint-tool',
  'screw',
  'shovel',
  'tape',
  'traffic-barrier',
  'trowel',
  'wall',
  'wheel-barrow',
  'align',
  'align-alt',
  'align-center',
  'align-center-alt',
  'align-center-justify',
  'align-justify',
  'align-left',
  'align-left-justify',
  'align-letter-right',
  'align-right',
  'align-right-justify',
  'bars',
  'bold',
  'border-alt',
  'border-bottom',
  'border-clear',
  'border-horizontal',
  'border-inner',
  'border-left',
  'border-right',
  'border-top',
  'border-vertical',
  'dialpad',
  'dialpad-alt',
  'document-layout-center',
  'document-layout-left',
  'document-layout-right',
  'english-to-chinese',
  'font',
  'grip-horizontal-line',
  'hindi-to-chinese',
  'italic',
  'language',
  'left-indent',
  'left-indent-alt',
  'left-to-right-text-direction',
  'letter-chinese-a',
  'letter-english-a',
  'letter-hindi-a',
  'letter-japanese-a',
  'list-ui-alt',
  'list-ul',
  'paragraph',
  'right-indent-alt',
  'right-to-left-text-direction',
  'sigma',
  'sort-amount-down',
  'sort-amount-up',
  'subject',
  'text',
  'text-fields',
  'text-size',
  'text-strike-through',
  'underline',
  'wrap-text',
  'apps',
  'border-out',
  'bring-bottom',
  'bring-front',
  'brush-alt',
  'circle-layer',
  'compress',
  'compress-lines',
  'compress-v',
  'crop-alt',
  'crop-alt-rotate-left',
  'crop-alt-rotate-right',
  'exclude',
  'flip-h',
  'flip-h-alt',
  'flip-v',
  'flip-v-alt',
  'grids',
  'horizontal-align-center',
  'horizontal-align-left',
  'horizontal-align-right',
  'horizontal-distribution-center',
  'horizontal-distribution-left',
  'horizontal-distribution-right',
  'icons',
  'illustration',
  'image-resize-landscape',
  'image-resize-square',
  'layers-alt',
  'line-alt',
  'line-spacing',
  'minus-path',
  'object-group',
  'object-ungroup',
  'palette',
  'panorama-h',
  'panorama-h-alt',
  'panorama-v',
  'pathfinder',
  'pathfinder-unite',
  'repeat',
  'ruler',
  'ruler-combined',
  'shrink',
  'spin',
  'square-full',
  'table',
  'th',
  'th-large',
  'th-slash',
  'vector-square',
  'vector-square-alt',
  'vertical-align-bottom',
  'vertical-align-center',
  'vertical-align-top',
  'vertical-distribute-bottom',
  'vertical-distribution-center',
  'vertical-distribution-top',
  'circuit',
  'desktop',
  'desktop-alt',
  'hdd',
  'laptop',
  'mobile-android',
  'mobile-android-alt',
  'modem',
  'monitor',
  'mouse',
  'mouse-alt',
  'mouse-alt-2',
  'print',
  'processor',
  'tablet',
  'webcam',
  'weight',
  'wifi-router',
  'abacus',
  'atom',
  'award',
  'award-alt',
  'backpack',
  'bell-school',
  'book',
  'book-alt',
  'book-open',
  'brain',
  'cell',
  'diary',
  'diary-alt',
  'dna',
  'flask',
  'flask-potion',
  'game-structure',
  'graduation-cap',
  'medal',
  'meeting-board',
  'notebooks',
  'notes',
  'podium',
  'presentation',
  'presentation-check',
  'presentation-edit',
  'presentation-lines-alt',
  'presentation-minus',
  'presentation-play',
  'presentation-plus',
  'presentation-times',
  'robot',
  'sperms',
  'telescope',
  'angry',
  'annoyed',
  'annoyed-alt',
  'confused',
  'dizzy-meh',
  'emoji',
  'frown',
  'grin',
  'grin-tongue-wink',
  'grin-tongue-wink-alt',
  'kid',
  'laughing',
  'meh',
  'meh-alt',
  'meh-closed-eye',
  'nerd',
  'ninja',
  'sad',
  'sad-cry',
  'sad-crying',
  'sad-dizzy',
  'sad-squint',
  'sick',
  'silence',
  'silent-squint',
  'smile',
  'smile-beam',
  'smile-dizzy',
  'smile-squint-wink',
  'smile-squint-wink-alt',
  'smile-wink',
  'smile-wink-alt',
  'squint',
  'surprise',
  'unamused',
  'books',
  'clipboard',
  'clipboard-alt',
  'clipboard-blank',
  'clipboard-notes',
  'copy',
  'copy-alt',
  'copy-landscape',
  'document-info',
  'file',
  'file-alt',
  'file-blank',
  'file-block-alt',
  'file-bookmark-alt',
  'file-check',
  'file-check-alt',
  'file-contract',
  'file-contract-dollar',
  'file-copy-alt',
  'file-download',
  'file-download-alt',
  'file-edit-alt',
  'file-exclamation',
  'file-exclamation-alt',
  'file-export',
  'file-graph',
  'file-heart',
  'file-import',
  'file-info-alt',
  'file-landscape',
  'file-landscape-alt',
  'file-lock-alt',
  'file-medical',
  'file-minus',
  'file-minus-alt',
  'file-network',
  'file-plus',
  'file-plus-alt',
  'file-question',
  'file-question-alt',
  'file-redo-alt',
  'file-search-alt',
  'file-share-alt',
  'file-shield-alt',
  'file-times',
  'file-times-alt',
  'file-upload',
  'file-upload-alt',
  'files-landscapes',
  'files-landscapes-alt',
  'folder',
  'folder-check',
  'folder-download',
  'folder-exclamation',
  'folder-heart',
  'folder-info',
  'folder-lock',
  'folder-medical',
  'folder-minus',
  'folder-network',
  'folder-open',
  'folder-plus',
  'folder-question',
  'folder-times',
  'folder-upload',
  'compass',
  'directions',
  'location-arrow',
  'location-arrow-alt',
  'location-pin-alt',
  'location-point',
  'map',
  'map-marker',
  'map-marker-alt',
  'map-marker-edit',
  'map-marker-info',
  'map-marker-minus',
  'map-marker-plus',
  'map-marker-question',
  'map-marker-shield',
  'map-pin',
  'map-pin-alt',
  'navigator',
  'sign-alt',
  'sign-left',
  'sign-right',
  'ambulance',
  'assistive-listening-systems',
  'band-aid',
  'book-medical',
  'capsule',
  'clinic-medical',
  'coronavirus',
  'ear',
  'file-medical-alt',
  'head-side',
  'head-side-cough',
  'head-side-mask',
  'heart-medical',
  'heart-rate',
  'heartbeat',
  'hospital',
  'hospital-square-sign',
  'hospital-symbol',
  'house-user',
  'medical-drip',
  'medical-square',
  'medical-square-full',
  'medkit',
  'microscope',
  'monitor-heart-rate',
  'prescription-bottle',
  'sanitizer',
  'sanitizer-alt',
  'shield-plus',
  'social-distancing',
  'stethoscope',
  'stethoscope-alt',
  'store-slash',
  'stretcher',
  'syringe',
  'tablets',
  'thermometer',
  'toilet-paper',
  'user-arrows',
  'user-md',
  'user-nurse',
  'virus-slash',
  'wheelchair-alt',
  'airplay',
  'backward',
  'bolt-slash',
  'boombox',
  'camera',
  'camera-change',
  'camera-plus',
  'clapper-board',
  'compact-disc',
  'equal-circle',
  'film',
  'flower',
  'forward',
  'headphone-slash',
  'headphones',
  'headphones-alt',
  'image',
  'image-block',
  'image-broken',
  'image-check',
  'image-download',
  'image-edit',
  'image-lock',
  'image-minus',
  'image-plus',
  'image-question',
  'image-redo',
  'image-search',
  'image-share',
  'image-shield',
  'image-times',
  'image-upload',
  'image-v',
  'images',
  'microphone-slash',
  'mountains',
  'music',
  'music-note',
  'music-tune-slash',
  'pause',
  'pause-circle',
  'picture',
  'play',
  'play-circle',
  'previous',
  'record-audio',
  'rss-interface',
  'scenery',
  'selfie',
  'shutter',
  'shutter-alt',
  'skip-forward',
  'skip-forward-alt',
  'skip-forward-circle',
  'slider-h',
  'slider-h-range',
  'sliders-v',
  'sliders-v-alt',
  'step-backward',
  'step-backward-alt',
  'step-backward-circle',
  'step-forward',
  'stop-circle',
  'ticket',
  'video',
  'video-question',
  'bright',
  'capture',
  'exposure-alt',
  'exposure-increase',
  'eye',
  'focus',
  'focus-add',
  'focus-target',
  'keyhole-circle',
  'keyhole-square',
  'keyhole-square-full',
  'lock',
  'lock-access',
  'lock-alt',
  'lock-open-alt',
  'padlock',
  'shield',
  'shield-check',
  'shield-exclamation',
  'shield-question',
  'shield-slash',
  'unlock',
  'unlock-alt',
  'circle',
  'heart',
  'heart-alt',
  'octagon',
  'pentagon',
  'polygon',
  'square',
  'square-shape',
  'star',
  'triangle',
  'archive',
  'credit-card-search',
  'gift',
  'label',
  'label-alt',
  'pricetag-alt',
  'qrcode-scan',
  'shop',
  'shopping-bag',
  'shopping-basket',
  'shopping-cart',
  'shopping-cart-alt',
  'store',
  'store-alt',
  'tag',
  'tag-alt',
  'transaction',
  'accessible-icon-alt',
  'ban',
  'closed-captioning',
  'closed-captioning-slash',
  'copyright',
  'creative-commons-pd',
  'mars',
  'parking-circle',
  'parking-square',
  'registered',
  'servicemark',
  'trademark',
  'trademark-circle',
  'venus',
  'wheelchair',
  'baseball-ball',
  'basketball',
  'basketball-hoop',
  'bowling-ball',
  'club',
  'diamond',
  'dice-five',
  'dice-four',
  'dice-one',
  'dice-six',
  'dice-three',
  'dice-two',
  'dumbbell',
  'football',
  'football-ball',
  'golf-ball',
  'heart-sign',
  'kayak',
  'spade',
  'table-tennis',
  'tennis-ball',
  'trophy',
  'volleyball',
  'clock',
  'clock-eight',
  'clock-five',
  'clock-nine',
  'clock-seven',
  'clock-ten',
  'clock-three',
  'clock-two',
  'stopwatch',
  'stopwatch-slash',
  'watch',
  'watch-alt',
  'bus',
  'bus-alt',
  'bus-school',
  'car-sideview',
  'car-wash',
  'luggage-cart',
  'metro',
  'parcel',
  'ship',
  'subway',
  'subway-alt',
  'taxi',
  'truck',
  'truck-loading',
  'plus-0',
  'plus-3',
  'plus-6',
  'plus-10',
  'plus-12',
  'plus-13',
  'plus-16',
  'plus-17',
  'plus-18',
  'plus-21',
  'adjust',
  'adjust-alt',
  'adjust-circle',
  'adjust-half',
  'anchor',
  'android-phone-slash',
  'ankh',
  'archive-alt',
  'archway',
  'asterisk',
  'at',
  'auto-flash',
  'baby-carriage',
  'backspace',
  'bag-slash',
  'balance-scale',
  'bath',
  'battery-bolt',
  'battery-empty',
  'bed',
  'bed-double',
  'bell',
  'bell-slash',
  'bluetooth-b',
  'bolt',
  'bolt-alt',
  'bookmark',
  'bookmark-full',
  'box',
  'brightness',
  'brightness-empty',
  'brightness-half',
  'brightness-low',
  'brightness-minus',
  'brightness-plus',
  'building',
  'bullseye',
  'calculator',
  'calendar-slash',
  'calender',
  'camera-slash',
  'cancel',
  'car',
  'car-slash',
  'card-atm',
  'check',
  'check-circle',
  'check-square',
  'coffee',
  'cog',
  'comment-alt-slash',
  'comment-slash',
  'create-dashboard',
  'crockery',
  'cube',
  'dashboard',
  'desktop-alt-slash',
  'desktop-slash',
  'draggabledots',
  'edit',
  'edit-alt',
  'elipsis-double-v-alt',
  'ellipsis-h',
  'ellipsis-v',
  'estate',
  'exclamation',
  'exclamation-circle',
  'exclamation-octagon',
  'exclamation-triangle',
  'external-link-alt',
  'eye-slash',
  'favorite',
  'feedback',
  'fidget-spinner',
  'file-lanscape-slash',
  'file-slash',
  'filter',
  'filter-slash',
  'fire',
  'folder-slash',
  'football-american',
  'glass',
  'glass-martini',
  'glass-martini-alt',
  'glass-martini-alt-slash',
  'glass-tea',
  'globe',
  'heart-break',
  'history',
  'history-alt',
  'home',
  'hourglass',
  'image-alt-slash',
  'image-slash',
  'inbox',
  'info',
  'info-circle',
  'key-skeleton',
  'key-skeleton-alt',
  'keyboard',
  'keyboard-alt',
  'keyboard-hide',
  'keyboard-show',
  'lamp',
  'layer-group',
  'layer-group-slash',
  'layers',
  'layers-slash',
  'life-ring',
  'link',
  'link-add',
  'link-alt',
  'link-broken',
  'link-h',
  'list-ol',
  'list-ol-alt',
  'lock-slash',
  'map-marker-slash',
  'megaphone',
  'message',
  'microphone',
  'minus',
  'minus-circle',
  'minus-square',
  'minus-square-full',
  'mobile-vibrate',
  'money-bill-slash',
  'multiply',
  'newspaper',
  'package',
  'paperclip',
  'pen',
  'pizza-slice',
  'plane',
  'plane-arrival',
  'plane-departure',
  'plane-fly',
  'plug',
  'plus',
  'plus-circle',
  'plus-square',
  'power',
  'print-slash',
  'process',
  'pump',
  'question',
  'question-circle',
  'redo',
  'refresh',
  'restaurant',
  'rocket',
  'rope-way',
  'rotate-360',
  'rss',
  'save',
  'search',
  'search-alt',
  'search-minus',
  'search-plus',
  'setting',
  'share-alt',
  'sign-in-alt',
  'sign-out-alt',
  'signal',
  'signal-alt',
  'signin',
  'signout',
  'sim-card',
  'space-key',
  'spinner',
  'spinner-alt',
  'star-half-alt',
  'streering',
  'sun',
  'swatchbook',
  'swimmer',
  'sync',
  'sync-exclamation',
  'sync-slash',
  'tachometer-fast',
  'tachometer-fast-alt',
  'tear',
  'thumbs-down',
  'thumbs-up',
  'times',
  'times-circle',
  'times-square',
  'toggle-off',
  'toggle-on',
  'traffic-light',
  'trash',
  'trash-alt',
  'trees',
  'tv-retro',
  'tv-retro-slash',
  'umbrella',
  'upload',
  'utensils',
  'utensils-alt',
  'video-slash',
  'voicemail',
  'voicemail-rectangle',
  'volume',
  'volume-down',
  'volume-mute',
  'volume-off',
  'volume-up',
  'wallet',
  'water-drop-slash',
  'water-glass',
  'wifi',
  'wifi-slash',
  'wrench',
  'x',
  'x-add',
  'yin-yang',
  'book-reader',
  'user',
  'user-check',
  'user-circle',
  'user-exclamation',
  'user-location',
  'user-minus',
  'user-plus',
  'user-square',
  'user-times',
  'users-alt',
  'celsius',
  'cloud',
  'cloud-drizzle',
  'cloud-hail',
  'cloud-meatball',
  'cloud-moon',
  'cloud-moon-hail',
  'cloud-moon-meatball',
  'cloud-moon-rain',
  'cloud-moon-showers',
  'cloud-rain',
  'cloud-rain-sun',
  'cloud-showers',
  'cloud-showers-alt',
  'cloud-showers-heavy',
  'cloud-sun',
  'cloud-sun-hail',
  'cloud-sun-meatball',
  'cloud-sun-rain',
  'cloud-sun-rain-alt',
  'cloud-sun-tear',
  'cloud-wind',
  'clouds',
  'desert',
  'fahrenheit',
  'forecastcloud-moon-tear',
  'moon',
  'moon-eclipse',
  'moonset',
  'mountains-sun',
  'n-a',
  'rainbow',
  'raindrops',
  'raindrops-alt',
  'snow-flake',
  'snowflake',
  'snowflake-alt',
  'sunset',
  'temperature',
  'temperature-empty',
  'temperature-half',
  'temperature-minus',
  'temperature-plus',
  'temperature-quarter',
  'temperature-three-quarter',
  'thunderstorm',
  'thunderstorm-moon',
  'thunderstorm-sun',
  'tornado',
  'water',
  'wind',
  'wind-moon',
  'wind-sun',
  'windsock',
  'windy',
  'align-center-h',
  'align-center-v',
  'angle-double-down',
  'angle-double-left',
  'angle-double-right',
  'angle-double-up',
  'angle-down',
  'angle-left',
  'angle-left-b',
  'angle-right',
  'angle-right-b',
  'angle-up',
  'arrow',
  'arrow-break',
  'arrow-circle-down',
  'arrow-circle-left',
  'arrow-circle-right',
  'arrow-circle-up',
  'arrow-compress-h',
  'arrow-down',
  'arrow-down-left',
  'arrow-down-right',
  'arrow-from-right',
  'arrow-from-top',
  'arrow-growth',
  'arrow-left',
  'arrow-random',
  'arrow-resize-diagonal',
  'arrow-right',
  'arrow-to-bottom',
  'arrow-to-right',
  'arrow-up',
  'arrow-up-left',
  'arrow-up-right',
  'arrows-h',
  'arrows-h-alt',
  'arrows-left-down',
  'arrows-maximize',
  'arrows-merge',
  'arrows-resize',
  'arrows-resize-h',
  'arrows-resize-v',
  'arrows-right-down',
  'arrows-shrink-h',
  'arrows-shrink-v',
  'arrows-up-right',
  'arrows-v',
  'arrows-v-alt',
  'caret-right',
  'chart-down',
  'compress-alt',
  'compress-alt-left',
  'compress-arrows',
  'compress-point',
  'corner-down-left',
  'corner-down-right',
  'corner-down-right-alt',
  'corner-left-down',
  'corner-right-down',
  'corner-up-left',
  'corner-up-left-alt',
  'corner-up-right',
  'corner-up-right-alt',
  'direction',
  'download-alt',
  'enter',
  'exchange',
  'exchange-alt',
  'expand-alt',
  'expand-arrows',
  'expand-arrows-alt',
  'expand-from-corner',
  'expand-left',
  'expand-right',
  'export',
  'import',
  'left-arrow-from-left',
  'left-arrow-to-left',
  'maximize-left',
  'scaling-left',
  'scaling-right',
  'scroll',
  'scroll-h',
  'shuffle',
  'sort',
  'sorting',
  'top-arrow-from-top',
  'top-arrow-to-top',
  'upload-alt',
  '500px',
  'adobe',
  'adobe-alt',
  'amazon',
  'android',
  'android-alt',
  'apple',
  'apple-alt',
  'behance',
  'behance-alt',
  'bing',
  'bitcoin',
  'bitcoin-alt',
  'black-berry',
  'blogger',
  'blogger-alt',
  'css3-simple',
  'discord',
  'docker',
  'dribbble',
  'dropbox',
  'facebook',
  'facebook-f',
  'facebook-messenger',
  'facebook-messenger-alt',
  'github',
  'github-alt',
  'gitlab',
  'google',
  'google-drive',
  'google-drive-alt',
  'google-hangouts',
  'google-hangouts-alt',
  'google-play',
  'hipchat',
  'html3',
  'html3-alt',
  'html5',
  'html5-alt',
  'instagram',
  'instagram-alt',
  'intercom',
  'intercom-alt',
  'java-script',
  'line',
  'linkedin',
  'linkedin-alt',
  'linux',
  'lottiefiles',
  'lottiefiles-alt',
  'master-card',
  'medium-m',
  'microsoft',
  'okta',
  'opera',
  'opera-alt',
  'pagelines',
  'pagerduty',
  'paypal',
  'programming-language',
  'react',
  'reddit-alien-alt',
  'skype',
  'skype-alt',
  'slack',
  'slack-alt',
  'snapchat-alt',
  'snapchat-ghost',
  'snapchat-square',
  'swiggy',
  'telegram',
  'telegram-alt',
  'tumblr',
  'tumblr-alt',
  'tumblr-square',
  'twitter',
  'twitter-alt',
  'visual-studio',
  'vk',
  'vk-alt',
  'vuejs',
  'vuejs-alt',
  'whatsapp',
  'whatsapp-alt',
  'windows',
  'wordpress',
  'wordpress-simple',
  'youtube',
  'analysis',
  'analytics',
  'bag',
  'bag-alt',
  'bill',
  'bitcoin-circle',
  'bitcoin-sign',
  'briefcase',
  'briefcase-alt',
  'calculator-alt',
  'calendar-alt',
  'chart',
  'chart-bar',
  'chart-bar-alt',
  'chart-growth',
  'chart-growth-alt',
  'chart-line',
  'chart-pie',
  'chart-pie-alt',
  'coins',
  'comparison',
  'credit-card',
  'crosshair',
  'crosshair-alt',
  'crosshairs',
  'dollar-alt',
  'dollar-sign',
  'dollar-sign-alt',
  'euro',
  'euro-circle',
  'gold',
  'graph-bar',
  'hunting',
  'invoice',
  'lightbulb',
  'lightbulb-alt',
  'lira-sign',
  'money-bill',
  'money-bill-stack',
  'money-insert',
  'money-stack',
  'money-withdraw',
  'money-withdrawal',
  'moneybag',
  'moneybag-alt',
  'panel-add',
  'percentage',
  'pound',
  'pound-circle',
  'presentation-line',
  'puzzle-piece',
  'receipt',
  'receipt-alt',
  'rupee-sign',
  'schedule',
  'signal-alt-3',
  'sitemap',
  'suitcase',
  'suitcase-alt',
  'university',
  'usd-circle',
  'usd-square',
  'yen',
  'yen-circle',
  'chat',
  'chat-bubble-user',
  'chat-info',
  'comment',
  'comment-add',
  'comment-alt',
  'comment-alt-block',
  'comment-alt-chart-lines',
  'comment-alt-check',
  'comment-alt-dots',
  'comment-alt-download',
  'comment-alt-edit',
  'comment-alt-exclamation',
  'comment-alt-heart',
  'comment-alt-image',
  'comment-alt-info',
  'comment-alt-lines',
  'comment-alt-lock',
  'comment-alt-medical',
  'comment-alt-message',
  'comment-alt-notes',
  'comment-alt-plus',
  'comment-alt-question',
  'comment-alt-redo',
  'comment-alt-search',
  'comment-alt-share',
  'comment-alt-shield',
  'comment-alt-upload',
  'comment-alt-verify',
  'comment-block',
  'comment-chart-line',
  'comment-check',
  'comment-dots',
  'comment-download',
  'comment-edit',
  'comment-exclamation',
  'comment-heart',
  'comment-image',
  'comment-info',
  'comment-info-alt',
  'comment-lines',
  'comment-lock',
  'comment-medical',
  'comment-message',
  'comment-notes',
  'comment-plus',
  'comment-question',
  'comment-redo',
  'comment-search',
  'comment-share',
  'comment-shield',
  'comment-upload',
  'comment-verify',
  'comments',
  'comments-alt',
  'share',
  'brackets-curly',
  'browser',
  'bug',
  'channel',
  'channel-add',
  'cloud-block',
  'cloud-bookmark',
  'cloud-check',
  'cloud-computing',
  'cloud-data-connection',
  'cloud-database-tree',
  'cloud-download',
  'cloud-exclamation',
  'cloud-heart',
  'cloud-info',
  'cloud-lock',
  'cloud-question',
  'cloud-redo',
  'cloud-share',
  'cloud-shield',
  'cloud-slash',
  'cloud-times',
  'cloud-unlock',
  'cloud-upload',
  'cloud-wifi',
  'code-branch',
  'columns',
  'data-sharing',
  'database',
  'database-alt',
  'grid',
  'server',
  'server-alt',
  'server-connection',
  'server-network',
  'server-network-alt',
  'servers',
  'web-grid',
  'web-grid-alt',
  'web-section',
  'web-section-alt',
  'window',
  'window-grid',
  'window-maximize',
  'window-section',
  'calling',
  'desktop-cloud-alt',
  'envelope',
  'envelope-add',
  'envelope-alt',
  'envelope-block',
  'envelope-bookmark',
  'envelope-check',
  'envelope-download',
  'envelope-download-alt',
  'envelope-edit',
  'envelope-exclamation',
  'envelope-heart',
  'envelope-info',
  'envelope-lock',
  'envelope-minus',
  'envelope-open',
  'envelope-question',
  'envelope-receive',
  'envelope-redo',
  'envelope-search',
  'envelope-send',
  'envelope-share',
  'envelope-shield',
  'envelope-star',
  'envelope-times',
  'envelope-upload',
  'envelope-upload-alt',
  'envelopes',
  'fast-mail',
  'fast-mail-alt',
  'forwaded-call',
  'incoming-call',
  'laptop-cloud',
  'laptop-connection',
  'mailbox',
  'mailbox-alt',
  'missed-call',
  'outgoing-call',
  'phone',
  'phone-alt',
  'phone-pause',
  'phone-slash',
  'phone-times',
  'phone-volume',
  'post-stamp',
  'postcard',
  'rss-alt',
  'constructor',
  'drill',
  'hard-hat',
  'jackhammer',
  'no-entry',
  'paint-tool',
  'screw',
  'shovel',
  'tape',
  'traffic-barrier',
  'trowel',
  'wall',
  'wheel-barrow',
  'align',
  'align-alt',
  'align-center',
  'align-center-alt',
  'align-center-justify',
  'align-justify',
  'align-left',
  'align-left-justify',
  'align-letter-right',
  'align-right',
  'align-right-justify',
  'bars',
  'bold',
  'border-alt',
  'border-bottom',
  'border-clear',
  'border-horizontal',
  'border-inner',
  'border-left',
  'border-right',
  'border-top',
  'border-vertical',
  'dialpad',
  'dialpad-alt',
  'document-layout-center',
  'document-layout-left',
  'document-layout-right',
  'english-to-chinese',
  'font',
  'grip-horizontal-line',
  'hindi-to-chinese',
  'italic',
  'language',
  'left-indent',
  'left-indent-alt',
  'left-to-right-text-direction',
  'letter-chinese-a',
  'letter-english-a',
  'letter-hindi-a',
  'letter-japanese-a',
  'list-ui-alt',
  'list-ul',
  'paragraph',
  'right-indent-alt',
  'right-to-left-text-direction',
  'sigma',
  'sort-amount-down',
  'sort-amount-up',
  'subject',
  'text',
  'text-fields',
  'text-size',
  'text-strike-through',
  'underline',
  'wrap-text',
  'apps',
  'border-out',
  'bring-bottom',
  'bring-front',
  'brush-alt',
  'circle-layer',
  'compress',
  'compress-lines',
  'compress-v',
  'crop-alt',
  'crop-alt-rotate-left',
  'crop-alt-rotate-right',
  'exclude',
  'flip-h',
  'flip-h-alt',
  'flip-v',
  'flip-v-alt',
  'grids',
  'horizontal-align-center',
  'horizontal-align-left',
  'horizontal-align-right',
  'horizontal-distribution-center',
  'horizontal-distribution-left',
  'horizontal-distribution-right',
  'icons',
  'illustration',
  'image-resize-landscape',
  'image-resize-square',
  'layers-alt',
  'line-alt',
  'line-spacing',
  'minus-path',
  'object-group',
  'object-ungroup',
  'palette',
  'panorama-h',
  'panorama-h-alt',
  'panorama-v',
  'pathfinder',
  'pathfinder-unite',
  'repeat',
  'ruler',
  'ruler-combined',
  'shrink',
  'spin',
  'square-full',
  'table',
  'th',
  'th-large',
  'th-slash',
  'vector-square',
  'vector-square-alt',
  'vertical-align-bottom',
  'vertical-align-center',
  'vertical-align-top',
  'vertical-distribute-bottom',
  'vertical-distribution-center',
  'vertical-distribution-top',
  'circuit',
  'desktop',
  'desktop-alt',
  'hdd',
  'laptop',
  'mobile-android',
  'mobile-android-alt',
  'modem',
  'monitor',
  'mouse',
  'mouse-alt',
  'mouse-alt-2',
  'print',
  'processor',
  'tablet',
  'webcam',
  'weight',
  'wifi-router',
  'abacus',
  'atom',
  'award',
  'award-alt',
  'backpack',
  'bell-school',
  'book',
  'book-alt',
  'book-open',
  'brain',
  'cell',
  'diary',
  'diary-alt',
  'dna',
  'flask',
  'flask-potion',
  'game-structure',
  'graduation-cap',
  'medal',
  'meeting-board',
  'notebooks',
  'notes',
  'podium',
  'presentation',
  'presentation-check',
  'presentation-edit',
  'presentation-lines-alt',
  'presentation-minus',
  'presentation-play',
  'presentation-plus',
  'presentation-times',
  'robot',
  'sperms',
  'telescope',
  'angry',
  'annoyed',
  'annoyed-alt',
  'confused',
  'dizzy-meh',
  'emoji',
  'frown',
  'grin',
  'grin-tongue-wink',
  'grin-tongue-wink-alt',
  'kid',
  'laughing',
  'meh',
  'meh-alt',
  'meh-closed-eye',
  'nerd',
  'ninja',
  'sad',
  'sad-cry',
  'sad-crying',
  'sad-dizzy',
  'sad-squint',
  'sick',
  'silence',
  'silent-squint',
  'smile',
  'smile-beam',
  'smile-dizzy',
  'smile-squint-wink',
  'smile-squint-wink-alt',
  'smile-wink',
  'smile-wink-alt',
  'squint',
  'surprise',
  'unamused',
  'books',
  'clipboard',
  'clipboard-alt',
  'clipboard-blank',
  'clipboard-notes',
  'copy',
  'copy-alt',
  'copy-landscape',
  'document-info',
  'file',
  'file-alt',
  'file-blank',
  'file-block-alt',
  'file-bookmark-alt',
  'file-check',
  'file-check-alt',
  'file-contract',
  'file-contract-dollar',
  'file-copy-alt',
  'file-download',
  'file-download-alt',
  'file-edit-alt',
  'file-exclamation',
  'file-exclamation-alt',
  'file-export',
  'file-graph',
  'file-heart',
  'file-import',
  'file-info-alt',
  'file-landscape',
  'file-landscape-alt',
  'file-lock-alt',
  'file-medical',
  'file-minus',
  'file-minus-alt',
  'file-network',
  'file-plus',
  'file-plus-alt',
  'file-question',
  'file-question-alt',
  'file-redo-alt',
  'file-search-alt',
  'file-share-alt',
  'file-shield-alt',
  'file-times',
  'file-times-alt',
  'file-upload',
  'file-upload-alt',
  'files-landscapes',
  'files-landscapes-alt',
  'folder',
  'folder-check',
  'folder-download',
  'folder-exclamation',
  'folder-heart',
  'folder-info',
  'folder-lock',
  'folder-medical',
  'folder-minus',
  'folder-network',
  'folder-open',
  'folder-plus',
  'folder-question',
  'folder-times',
  'folder-upload',
  'compass',
  'directions',
  'location-arrow',
  'location-arrow-alt',
  'location-pin-alt',
  'location-point',
  'map',
  'map-marker',
  'map-marker-alt',
  'map-marker-edit',
  'map-marker-info',
  'map-marker-minus',
  'map-marker-plus',
  'map-marker-question',
  'map-marker-shield',
  'map-pin',
  'map-pin-alt',
  'navigator',
  'sign-alt',
  'sign-left',
  'sign-right',
  'ambulance',
  'assistive-listening-systems',
  'band-aid',
  'book-medical',
  'capsule',
  'clinic-medical',
  'coronavirus',
  'ear',
  'file-medical-alt',
  'head-side',
  'head-side-cough',
  'head-side-mask',
  'heart-medical',
  'heart-rate',
  'heartbeat',
  'hospital',
  'hospital-square-sign',
  'hospital-symbol',
  'house-user',
  'medical-drip',
  'medical-square',
  'medical-square-full',
  'medkit',
  'microscope',
  'monitor-heart-rate',
  'prescription-bottle',
  'sanitizer',
  'sanitizer-alt',
  'shield-plus',
  'social-distancing',
  'stethoscope',
  'stethoscope-alt',
  'store-slash',
  'stretcher',
  'syringe',
  'tablets',
  'thermometer',
  'toilet-paper',
  'user-arrows',
  'user-md',
  'user-nurse',
  'virus-slash',
  'wheelchair-alt',
  'airplay',
  'backward',
  'bolt-slash',
  'boombox',
  'camera',
  'camera-change',
  'camera-plus',
  'clapper-board',
  'compact-disc',
  'equal-circle',
  'film',
  'flower',
  'forward',
  'headphone-slash',
  'headphones',
  'headphones-alt',
  'image',
  'image-block',
  'image-broken',
  'image-check',
  'image-download',
  'image-edit',
  'image-lock',
  'image-minus',
  'image-plus',
  'image-question',
  'image-redo',
  'image-search',
  'image-share',
  'image-shield',
  'image-times',
  'image-upload',
  'image-v',
  'images',
  'microphone-slash',
  'mountains',
  'music',
  'music-note',
  'music-tune-slash',
  'pause',
  'pause-circle',
  'picture',
  'play',
  'play-circle',
  'previous',
  'record-audio',
  'rss-interface',
  'scenery',
  'selfie',
  'shutter',
  'shutter-alt',
  'skip-forward',
  'skip-forward-alt',
  'skip-forward-circle',
  'slider-h',
  'slider-h-range',
  'sliders-v',
  'sliders-v-alt',
  'step-backward',
  'step-backward-alt',
  'step-backward-circle',
  'step-forward',
  'stop-circle',
  'ticket',
  'video',
  'video-question',
  'bright',
  'capture',
  'exposure-alt',
  'exposure-increase',
  'eye',
  'focus',
  'focus-add',
  'focus-target',
  'keyhole-circle',
  'keyhole-square',
  'keyhole-square-full',
  'lock',
  'lock-access',
  'lock-alt',
  'lock-open-alt',
  'padlock',
  'shield',
  'shield-check',
  'shield-exclamation',
  'shield-question',
  'shield-slash',
  'unlock',
  'unlock-alt',
  'circle',
  'heart',
  'heart-alt',
  'octagon',
  'pentagon',
  'polygon',
  'square',
  'square-shape',
  'star',
  'triangle',
  'archive',
  'credit-card-search',
  'gift',
  'label',
  'label-alt',
  'pricetag-alt',
  'qrcode-scan',
  'shop',
  'shopping-bag',
  'shopping-basket',
  'shopping-cart',
  'shopping-cart-alt',
  'store',
  'store-alt',
  'tag',
  'tag-alt',
  'transaction',
  'accessible-icon-alt',
  'ban',
  'closed-captioning',
  'closed-captioning-slash',
  'copyright',
  'creative-commons-pd',
  'mars',
  'parking-circle',
  'parking-square',
  'registered',
  'servicemark',
  'trademark',
  'trademark-circle',
  'venus',
  'wheelchair',
  'baseball-ball',
  'basketball',
  'basketball-hoop',
  'bowling-ball',
  'club',
  'diamond',
  'dice-five',
  'dice-four',
  'dice-one',
  'dice-six',
  'dice-three',
  'dice-two',
  'dumbbell',
  'football',
  'football-ball',
  'golf-ball',
  'heart-sign',
  'kayak',
  'spade',
  'table-tennis',
  'tennis-ball',
  'trophy',
  'volleyball',
  'clock',
  'clock-eight',
  'clock-five',
  'clock-nine',
  'clock-seven',
  'clock-ten',
  'clock-three',
  'clock-two',
  'stopwatch',
  'stopwatch-slash',
  'watch',
  'watch-alt',
  'bus',
  'bus-alt',
  'bus-school',
  'car-sideview',
  'car-wash',
  'luggage-cart',
  'metro',
  'parcel',
  'ship',
  'subway',
  'subway-alt',
  'taxi',
  'truck',
  'truck-loading',
  'plus-0',
  'plus-3',
  'plus-6',
  'plus-10',
  'plus-12',
  'plus-13',
  'plus-16',
  'plus-17',
  'plus-18',
  'plus-21',
  'adjust',
  'adjust-alt',
  'adjust-circle',
  'adjust-half',
  'anchor',
  'android-phone-slash',
  'ankh',
  'archive-alt',
  'archway',
  'asterisk',
  'at',
  'auto-flash',
  'baby-carriage',
  'backspace',
  'bag-slash',
  'balance-scale',
  'bath',
  'battery-bolt',
  'battery-empty',
  'bed',
  'bed-double',
  'bell',
  'bell-slash',
  'bluetooth-b',
  'bolt',
  'bolt-alt',
  'bookmark',
  'bookmark-full',
  'box',
  'brightness',
  'brightness-empty',
  'brightness-half',
  'brightness-low',
  'brightness-minus',
  'brightness-plus',
  'building',
  'bullseye',
  'calculator',
  'calendar-slash',
  'calender',
  'camera-slash',
  'cancel',
  'car',
  'car-slash',
  'card-atm',
  'check',
  'check-circle',
  'check-square',
  'coffee',
  'cog',
  'comment-alt-slash',
  'comment-slash',
  'create-dashboard',
  'crockery',
  'cube',
  'dashboard',
  'desktop-alt-slash',
  'desktop-slash',
  'draggabledots',
  'edit',
  'edit-alt',
  'elipsis-double-v-alt',
  'ellipsis-h',
  'ellipsis-v',
  'estate',
  'exclamation',
  'exclamation-circle',
  'exclamation-octagon',
  'exclamation-triangle',
  'external-link-alt',
  'eye-slash',
  'favorite',
  'feedback',
  'fidget-spinner',
  'file-lanscape-slash',
  'file-slash',
  'filter',
  'filter-slash',
  'fire',
  'folder-slash',
  'football-american',
  'glass',
  'glass-martini',
  'glass-martini-alt',
  'glass-martini-alt-slash',
  'glass-tea',
  'globe',
  'heart-break',
  'history',
  'history-alt',
  'home',
  'hourglass',
  'image-alt-slash',
  'image-slash',
  'inbox',
  'info',
  'info-circle',
  'key-skeleton',
  'key-skeleton-alt',
  'keyboard',
  'keyboard-alt',
  'keyboard-hide',
  'keyboard-show',
  'lamp',
  'layer-group',
  'layer-group-slash',
  'layers',
  'layers-slash',
  'life-ring',
  'link',
  'link-add',
  'link-alt',
  'link-broken',
  'link-h',
  'list-ol',
  'list-ol-alt',
  'lock-slash',
  'map-marker-slash',
  'megaphone',
  'message',
  'microphone',
  'minus',
  'minus-circle',
  'minus-square',
  'minus-square-full',
  'mobile-vibrate',
  'money-bill-slash',
  'multiply',
  'newspaper',
  'package',
  'paperclip',
  'pen',
  'pizza-slice',
  'plane',
  'plane-arrival',
  'plane-departure',
  'plane-fly',
  'plug',
  'plus',
  'plus-circle',
  'plus-square',
  'power',
  'print-slash',
  'process',
  'pump',
  'question',
  'question-circle',
  'redo',
  'refresh',
  'restaurant',
  'rocket',
  'rope-way',
  'rotate-360',
  'rss',
  'save',
  'search',
  'search-alt',
  'search-minus',
  'search-plus',
  'setting',
  'share-alt',
  'sign-in-alt',
  'sign-out-alt',
  'signal',
  'signal-alt',
  'signin',
  'signout',
  'sim-card',
  'space-key',
  'spinner',
  'spinner-alt',
  'star-half-alt',
  'streering',
  'sun',
  'swatchbook',
  'swimmer',
  'sync',
  'sync-exclamation',
  'sync-slash',
  'tachometer-fast',
  'tachometer-fast-alt',
  'tear',
  'thumbs-down',
  'thumbs-up',
  'times',
  'times-circle',
  'times-square',
  'toggle-off',
  'toggle-on',
  'traffic-light',
  'trash',
  'trash-alt',
  'trees',
  'tv-retro',
  'tv-retro-slash',
  'umbrella',
  'upload',
  'utensils',
  'utensils-alt',
  'video-slash',
  'voicemail',
  'voicemail-rectangle',
  'volume',
  'volume-down',
  'volume-mute',
  'volume-off',
  'volume-up',
  'wallet',
  'water-drop-slash',
  'water-glass',
  'wifi',
  'wifi-slash',
  'wrench',
  'x',
  'x-add',
  'yin-yang',
  'book-reader',
  'user',
  'user-check',
  'user-circle',
  'user-exclamation',
  'user-location',
  'user-minus',
  'user-plus',
  'user-square',
  'user-times',
  'users-alt',
  'celsius',
  'cloud',
  'cloud-drizzle',
  'cloud-hail',
  'cloud-meatball',
  'cloud-moon',
  'cloud-moon-hail',
  'cloud-moon-meatball',
  'cloud-moon-rain',
  'cloud-moon-showers',
  'cloud-rain',
  'cloud-rain-sun',
  'cloud-showers',
  'cloud-showers-alt',
  'cloud-showers-heavy',
  'cloud-sun',
  'cloud-sun-hail',
  'cloud-sun-meatball',
  'cloud-sun-rain',
  'cloud-sun-rain-alt',
  'cloud-sun-tear',
  'cloud-wind',
  'clouds',
  'desert',
  'fahrenheit',
  'forecastcloud-moon-tear',
  'moon',
  'moon-eclipse',
  'moonset',
  'mountains-sun',
  'n-a',
  'rainbow',
  'raindrops',
  'raindrops-alt',
  'snow-flake',
  'snowflake',
  'snowflake-alt',
  'sunset',
  'temperature',
  'temperature-empty',
  'temperature-half',
  'temperature-minus',
  'temperature-plus',
  'temperature-quarter',
  'temperature-three-quarter',
  'thunderstorm',
  'thunderstorm-moon',
  'thunderstorm-sun',
  'tornado',
  'water',
  'wind',
  'wind-moon',
  'wind-sun',
  'windsock',
  'windy'
];

const FontIcons: FC = () => {
  return (
    <DocLayout
      pageTitle="Unicons"
      quickAccssLinks={quickAccess}
      descriptionClass="lead px-xxl-6"
      headingColClass="col-lg-9 col-xl-8 col-xxl-7 mx-auto"
      description={
        <>
          Below you can find the list of 1110+ solid font icons. All these retina-ready icons can easily be styled by
          color, size, shadow, and anything possible with CSS. For more information on the icons please visit{' '}
          <a href="https://iconscout.com/unicons/explore/line" target="_blank" className="hover more" rel="noreferrer">
            Unicons website
          </a>
        </>
      }
    >
      {/* ========== section 1 ========== */}
      <section id="arrows" className="wrapper pt-16">
        <h2 className="mb-5">Arrows</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-align-center-h" />
                <span>align-center-h</span>
              </div>

              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-align-center-h"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-align-center-v"></i>
                <span>align-center-v</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-align-center-v"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-angle-double-down"></i>
                <span>angle-double-down</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-angle-double-down"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-angle-double-left"></i>
                <span>angle-double-left</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-angle-double-left"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-angle-double-right"></i>
                <span>angle-double-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-angle-double-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-angle-double-up"></i>
                <span>angle-double-up</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-angle-double-up"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-angle-down"></i>
                <span>angle-down</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-angle-down"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-angle-left"></i>
                <span>angle-left</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-angle-left"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-angle-left-b"></i>
                <span>angle-left-b</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-angle-left-b"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-angle-right"></i>
                <span>angle-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-angle-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-angle-right-b"></i>
                <span>angle-right-b</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-angle-right-b"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-angle-up"></i>
                <span>angle-up</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-angle-up"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow"></i>
                <span>arrow</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow-break"></i>
                <span>arrow-break</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow-break"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow-circle-down"></i>
                <span>arrow-circle-down</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow-circle-down"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow-circle-left"></i>
                <span>arrow-circle-left</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow-circle-left"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow-circle-right"></i>
                <span>arrow-circle-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow-circle-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow-circle-up"></i>
                <span>arrow-circle-up</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow-circle-up"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow-compress-h"></i>
                <span>arrow-compress-h</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow-compress-h"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow-down"></i>
                <span>arrow-down</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow-down"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow-down-left"></i>
                <span>arrow-down-left</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow-down-left"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow-down-right"></i>
                <span>arrow-down-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow-down-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow-from-right"></i>
                <span>arrow-from-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow-from-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow-from-top"></i>
                <span>arrow-from-top</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow-from-top"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow-growth"></i>
                <span>arrow-growth</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow-growth"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow-left"></i>
                <span>arrow-left</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow-left"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow-random"></i>
                <span>arrow-random</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow-random"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow-resize-diagonal"></i>
                <span>arrow-resize-diagonal</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow-resize-diagonal"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow-right"></i>
                <span>arrow-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow-to-bottom"></i>
                <span>arrow-to-bottom</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow-to-bottom"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow-to-right"></i>
                <span>arrow-to-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow-to-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow-up"></i>
                <span>arrow-up</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow-up"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow-up-left"></i>
                <span>arrow-up-left</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow-up-left"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrow-up-right"></i>
                <span>arrow-up-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrow-up-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrows-h"></i>
                <span>arrows-h</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrows-h"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrows-h-alt"></i>
                <span>arrows-h-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrows-h-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrows-left-down"></i>
                <span>arrows-left-down</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrows-left-down"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrows-maximize"></i>
                <span>arrows-maximize</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrows-maximize"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrows-merge"></i>
                <span>arrows-merge</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrows-merge"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrows-resize"></i>
                <span>arrows-resize</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrows-resize"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrows-resize-h"></i>
                <span>arrows-resize-h</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrows-resize-h"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrows-resize-v"></i>
                <span>arrows-resize-v</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrows-resize-v"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrows-right-down"></i>
                <span>arrows-right-down</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrows-right-down"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrows-shrink-h"></i>
                <span>arrows-shrink-h</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrows-shrink-h"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrows-shrink-v"></i>
                <span>arrows-shrink-v</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrows-shrink-v"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrows-up-right"></i>
                <span>arrows-up-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrows-up-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrows-v"></i>
                <span>arrows-v</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrows-v"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-arrows-v-alt"></i>
                <span>arrows-v-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-arrows-v-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-caret-right"></i>
                <span>caret-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-caret-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-chart-down"></i>
                <span>chart-down</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-chart-down"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-compress-alt"></i>
                <span>compress-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-compress-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-compress-alt-left"></i>
                <span>compress-alt-left</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-compress-alt-left"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-compress-arrows"></i>
                <span>compress-arrows</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-compress-arrows"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-compress-point"></i>
                <span>compress-point</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-compress-point"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-corner-down-left"></i>
                <span>corner-down-left</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-corner-down-left"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-corner-down-right"></i>
                <span>corner-down-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-corner-down-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-corner-down-right-alt"></i>
                <span>corner-down-right-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-corner-down-right-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-corner-left-down"></i>
                <span>corner-left-down</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-corner-left-down"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-corner-right-down"></i>
                <span>corner-right-down</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-corner-right-down"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-corner-up-left"></i>
                <span>corner-up-left</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-corner-up-left"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-corner-up-left-alt"></i>
                <span>corner-up-left-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-corner-up-left-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-corner-up-right"></i>
                <span>corner-up-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-corner-up-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-corner-up-right-alt"></i>
                <span>corner-up-right-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-corner-up-right-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-direction"></i>
                <span>direction</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-direction"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-download-alt"></i>
                <span>download-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-download-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-enter"></i>
                <span>enter</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-enter"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-exchange"></i>
                <span>exchange</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-exchange"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-exchange-alt"></i>
                <span>exchange-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-exchange-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-expand-alt"></i>
                <span>expand-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-expand-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-expand-arrows"></i>
                <span>expand-arrows</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-expand-arrows"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-expand-arrows-alt"></i>
                <span>expand-arrows-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-expand-arrows-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-expand-from-corner"></i>
                <span>expand-from-corner</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-expand-from-corner"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-expand-left"></i>
                <span>expand-left</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-expand-left"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-expand-right"></i>
                <span>expand-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-expand-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-export"></i>
                <span>export</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-export"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-import"></i>
                <span>import</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-import"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-left-arrow-from-left"></i>
                <span>left-arrow-from-left</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-left-arrow-from-left"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-left-arrow-to-left"></i>
                <span>left-arrow-to-left</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-left-arrow-to-left"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-maximize-left"></i>
                <span>maximize-left</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-maximize-left"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-scaling-left"></i>
                <span>scaling-left</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-scaling-left"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-scaling-right"></i>
                <span>scaling-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-scaling-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-scroll"></i>
                <span>scroll</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-scroll"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-scroll-h"></i>
                <span>scroll-h</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-scroll-h"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-shuffle"></i>
                <span>shuffle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-shuffle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sort"></i>
                <span>sort</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sort"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sorting"></i>
                <span>sorting</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sorting"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-top-arrow-from-top"></i>
                <span>top-arrow-from-top</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-top-arrow-from-top"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-top-arrow-to-top"></i>
                <span>top-arrow-to-top</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-top-arrow-to-top"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-upload-alt"></i>
                <span>upload-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-upload-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="brand-logos" className="wrapper pt-16">
        <h2 className="mb-5">Brand Logos</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-500px"></i>
                <span>500px</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-500px"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-adobe"></i>
                <span>adobe</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-adobe"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-adobe-alt"></i>
                <span>adobe-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-adobe-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-amazon"></i>
                <span>amazon</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-amazon"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-android"></i>
                <span>android</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-android"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-android-alt"></i>
                <span>android-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-android-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-apple"></i>
                <span>apple</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-apple"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-apple-alt"></i>
                <span>apple-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-apple-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-behance"></i>
                <span>behance</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-behance"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-behance-alt"></i>
                <span>behance-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-behance-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bing"></i>
                <span>bing</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bing"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bitcoin"></i>
                <span>bitcoin</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bitcoin"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bitcoin-alt"></i>
                <span>bitcoin-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bitcoin-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-black-berry"></i>
                <span>black-berry</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-black-berry"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-blogger"></i>
                <span>blogger</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-blogger"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-blogger-alt"></i>
                <span>blogger-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-blogger-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-css3-simple"></i>
                <span>css3-simple</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-css3-simple"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-discord"></i>
                <span>discord</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-discord"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-docker"></i>
                <span>docker</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-docker"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-dribbble"></i>
                <span>dribbble</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-dribbble"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-dropbox"></i>
                <span>dropbox</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-dropbox"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-facebook"></i>
                <span>facebook</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-facebook"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-facebook-f"></i>
                <span>facebook-f</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-facebook-f"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-facebook-messenger"></i>
                <span>facebook-messenger</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-facebook-messenger"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-facebook-messenger-alt"></i>
                <span>facebook-messenger-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-facebook-messenger-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-github"></i>
                <span>github</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-github"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-github-alt"></i>
                <span>github-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-github-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-gitlab"></i>
                <span>gitlab</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-gitlab"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-google"></i>
                <span>google</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-google"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-google-drive"></i>
                <span>google-drive</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-google-drive"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-google-drive-alt"></i>
                <span>google-drive-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-google-drive-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-google-hangouts"></i>
                <span>google-hangouts</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-google-hangouts"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-google-hangouts-alt"></i>
                <span>google-hangouts-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-google-hangouts-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-google-play"></i>
                <span>google-play</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-google-play"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-hipchat"></i>
                <span>hipchat</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-hipchat"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-html3"></i>
                <span>html3</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-html3"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-html3-alt"></i>
                <span>html3-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-html3-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-html5"></i>
                <span>html5</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-html5"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-html5-alt"></i>
                <span>html5-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-html5-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-instagram"></i>
                <span>instagram</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-instagram"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-instagram-alt"></i>
                <span>instagram-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-instagram-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-intercom"></i>
                <span>intercom</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-intercom"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-intercom-alt"></i>
                <span>intercom-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-intercom-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-java-script"></i>
                <span>java-script</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-java-script"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-line"></i>
                <span>line</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-line"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-linkedin"></i>
                <span>linkedin</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-linkedin"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-linkedin-alt"></i>
                <span>linkedin-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-linkedin-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-linux"></i>
                <span>linux</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-linux"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-lottiefiles"></i>
                <span>lottiefiles</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-lottiefiles"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-lottiefiles-alt"></i>
                <span>lottiefiles-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-lottiefiles-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-master-card"></i>
                <span>master-card</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-master-card"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-medium-m"></i>
                <span>medium-m</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-medium-m"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-microsoft"></i>
                <span>microsoft</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-microsoft"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-okta"></i>
                <span>okta</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-okta"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-opera"></i>
                <span>opera</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-opera"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-opera-alt"></i>
                <span>opera-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-opera-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-pagelines"></i>
                <span>pagelines</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-pagelines"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-pagerduty"></i>
                <span>pagerduty</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-pagerduty"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-paypal"></i>
                <span>paypal</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-paypal"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-programming-language"></i>
                <span>programming-language</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-programming-language"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-react"></i>
                <span>react</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-react"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-reddit-alien-alt"></i>
                <span>reddit-alien-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-reddit-alien-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-skype"></i>
                <span>skype</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-skype"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-skype-alt"></i>
                <span>skype-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-skype-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-slack"></i>
                <span>slack</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-slack"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-slack-alt"></i>
                <span>slack-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-slack-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-snapchat-alt"></i>
                <span>snapchat-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-snapchat-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-snapchat-ghost"></i>
                <span>snapchat-ghost</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-snapchat-ghost"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-snapchat-square"></i>
                <span>snapchat-square</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-snapchat-square"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-swiggy"></i>
                <span>swiggy</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-swiggy"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-telegram"></i>
                <span>telegram</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-telegram"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-telegram-alt"></i>
                <span>telegram-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-telegram-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-tumblr"></i>
                <span>tumblr</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-tumblr"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-tumblr-alt"></i>
                <span>tumblr-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-tumblr-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-tumblr-square"></i>
                <span>tumblr-square</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-tumblr-square"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-twitter"></i>
                <span>twitter</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-twitter"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-twitter-alt"></i>
                <span>twitter-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-twitter-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-visual-studio"></i>
                <span>visual-studio</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-visual-studio"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-vk"></i>
                <span>vk</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-vk"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-vk-alt"></i>
                <span>vk-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-vk-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-vuejs"></i>
                <span>vuejs</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-vuejs"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-vuejs-alt"></i>
                <span>vuejs-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-vuejs-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-whatsapp"></i>
                <span>whatsapp</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-whatsapp"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-whatsapp-alt"></i>
                <span>whatsapp-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-whatsapp-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-windows"></i>
                <span>windows</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-windows"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-wordpress"></i>
                <span>wordpress</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-wordpress"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-wordpress-simple"></i>
                <span>wordpress-simple</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-wordpress-simple"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-youtube"></i>
                <span>youtube</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-youtube"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="business" className="wrapper pt-16">
        <h2 className="mb-5">Business</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-analysis"></i>
                <span>analysis</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-analysis"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-analytics"></i>
                <span>analytics</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-analytics"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bag"></i>
                <span>bag</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bag"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bag-alt"></i>
                <span>bag-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bag-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bill"></i>
                <span>bill</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bill"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bitcoin-circle"></i>
                <span>bitcoin-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bitcoin-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bitcoin-sign"></i>
                <span>bitcoin-sign</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bitcoin-sign"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-briefcase"></i>
                <span>briefcase</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-briefcase"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-briefcase-alt"></i>
                <span>briefcase-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-briefcase-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-calculator-alt"></i>
                <span>calculator-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-calculator-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-calendar-alt"></i>
                <span>calendar-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-calendar-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-chart"></i>
                <span>chart</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-chart"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-chart-bar"></i>
                <span>chart-bar</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-chart-bar"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-chart-bar-alt"></i>
                <span>chart-bar-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-chart-bar-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-chart-growth"></i>
                <span>chart-growth</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-chart-growth"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-chart-growth-alt"></i>
                <span>chart-growth-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-chart-growth-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-chart-line"></i>
                <span>chart-line</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-chart-line"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-chart-pie"></i>
                <span>chart-pie</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-chart-pie"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-chart-pie-alt"></i>
                <span>chart-pie-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-chart-pie-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-coins"></i>
                <span>coins</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-coins"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comparison"></i>
                <span>comparison</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comparison"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-credit-card"></i>
                <span>credit-card</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-credit-card"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-crosshair"></i>
                <span>crosshair</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-crosshair"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-crosshair-alt"></i>
                <span>crosshair-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-crosshair-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-crosshairs"></i>
                <span>crosshairs</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-crosshairs"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-dollar-alt"></i>
                <span>dollar-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-dollar-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-dollar-sign"></i>
                <span>dollar-sign</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-dollar-sign"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-dollar-sign-alt"></i>
                <span>dollar-sign-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-dollar-sign-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-euro"></i>
                <span>euro</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-euro"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-euro-circle"></i>
                <span>euro-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-euro-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-gold"></i>
                <span>gold</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-gold"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-graph-bar"></i>
                <span>graph-bar</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-graph-bar"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-hunting"></i>
                <span>hunting</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-hunting"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-invoice"></i>
                <span>invoice</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-invoice"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-lightbulb"></i>
                <span>lightbulb</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-lightbulb"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-lightbulb-alt"></i>
                <span>lightbulb-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-lightbulb-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-lira-sign"></i>
                <span>lira-sign</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-lira-sign"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-money-bill"></i>
                <span>money-bill</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-money-bill"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-money-bill-stack"></i>
                <span>money-bill-stack</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-money-bill-stack"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-money-insert"></i>
                <span>money-insert</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-money-insert"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-money-stack"></i>
                <span>money-stack</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-money-stack"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-money-withdraw"></i>
                <span>money-withdraw</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-money-withdraw"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-money-withdrawal"></i>
                <span>money-withdrawal</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-money-withdrawal"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-moneybag"></i>
                <span>moneybag</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-moneybag"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-moneybag-alt"></i>
                <span>moneybag-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-moneybag-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-panel-add"></i>
                <span>panel-add</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-panel-add"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-percentage"></i>
                <span>percentage</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-percentage"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-pound"></i>
                <span>pound</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-pound"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-pound-circle"></i>
                <span>pound-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-pound-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-presentation-line"></i>
                <span>presentation-line</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-presentation-line"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-puzzle-piece"></i>
                <span>puzzle-piece</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-puzzle-piece"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-receipt"></i>
                <span>receipt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-receipt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-receipt-alt"></i>
                <span>receipt-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-receipt-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-rupee-sign"></i>
                <span>rupee-sign</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-rupee-sign"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-schedule"></i>
                <span>schedule</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-schedule"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-signal-alt-3"></i>
                <span>signal-alt-3</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-signal-alt-3"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sitemap"></i>
                <span>sitemap</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sitemap"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-suitcase"></i>
                <span>suitcase</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-suitcase"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-suitcase-alt"></i>
                <span>suitcase-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-suitcase-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-university"></i>
                <span>university</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-university"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-usd-circle"></i>
                <span>usd-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-usd-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-usd-square"></i>
                <span>usd-square</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-usd-square"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-yen"></i>
                <span>yen</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-yen"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-yen-circle"></i>
                <span>yen-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-yen-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="chat" className="wrapper pt-16">
        <h2 className="mb-5">Chat</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-chat"></i>
                <span>chat</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-chat"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-chat-bubble-user"></i>
                <span>chat-bubble-user</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-chat-bubble-user"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-chat-info"></i>
                <span>chat-info</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-chat-info"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment"></i>
                <span>comment</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-add"></i>
                <span>comment-add</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-add"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt"></i>
                <span>comment-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-block"></i>
                <span>comment-alt-block</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-block"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-chart-lines"></i>
                <span>comment-alt-chart-lines</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-chart-lines"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-check"></i>
                <span>comment-alt-check</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-check"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-dots"></i>
                <span>comment-alt-dots</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-dots"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-download"></i>
                <span>comment-alt-download</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-download"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-edit"></i>
                <span>comment-alt-edit</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-edit"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-exclamation"></i>
                <span>comment-alt-exclamation</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-exclamation"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-heart"></i>
                <span>comment-alt-heart</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-heart"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-image"></i>
                <span>comment-alt-image</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-image"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-info"></i>
                <span>comment-alt-info</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-info"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-lines"></i>
                <span>comment-alt-lines</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-lines"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-lock"></i>
                <span>comment-alt-lock</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-lock"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-medical"></i>
                <span>comment-alt-medical</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-medical"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-message"></i>
                <span>comment-alt-message</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-message"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-notes"></i>
                <span>comment-alt-notes</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-notes"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-plus"></i>
                <span>comment-alt-plus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-plus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-question"></i>
                <span>comment-alt-question</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-question"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-redo"></i>
                <span>comment-alt-redo</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-redo"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-search"></i>
                <span>comment-alt-search</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-search"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-share"></i>
                <span>comment-alt-share</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-share"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-shield"></i>
                <span>comment-alt-shield</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-shield"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-upload"></i>
                <span>comment-alt-upload</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-upload"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-verify"></i>
                <span>comment-alt-verify</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-verify"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-block"></i>
                <span>comment-block</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-block"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-chart-line"></i>
                <span>comment-chart-line</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-chart-line"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-check"></i>
                <span>comment-check</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-check"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-dots"></i>
                <span>comment-dots</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-dots"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-download"></i>
                <span>comment-download</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-download"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-edit"></i>
                <span>comment-edit</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-edit"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-exclamation"></i>
                <span>comment-exclamation</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-exclamation"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-heart"></i>
                <span>comment-heart</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-heart"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-image"></i>
                <span>comment-image</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-image"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-info"></i>
                <span>comment-info</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-info"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-info-alt"></i>
                <span>comment-info-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-info-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-lines"></i>
                <span>comment-lines</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-lines"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-lock"></i>
                <span>comment-lock</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-lock"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-medical"></i>
                <span>comment-medical</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-medical"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-message"></i>
                <span>comment-message</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-message"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-notes"></i>
                <span>comment-notes</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-notes"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-plus"></i>
                <span>comment-plus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-plus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-question"></i>
                <span>comment-question</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-question"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-redo"></i>
                <span>comment-redo</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-redo"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-search"></i>
                <span>comment-search</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-search"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-share"></i>
                <span>comment-share</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-share"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-shield"></i>
                <span>comment-shield</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-shield"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-upload"></i>
                <span>comment-upload</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-upload"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-verify"></i>
                <span>comment-verify</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-verify"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comments"></i>
                <span>comments</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comments"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comments-alt"></i>
                <span>comments-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comments-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-share"></i>
                <span>share</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-share"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="cloud-web" className="wrapper pt-16">
        <h2 className="mb-5">Cloud and Web</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-brackets-curly"></i>
                <span>brackets-curly</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-brackets-curly"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-browser"></i>
                <span>browser</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-browser"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bug"></i>
                <span>bug</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bug"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-channel"></i>
                <span>channel</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-channel"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-channel-add"></i>
                <span>channel-add</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-channel-add"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-block"></i>
                <span>cloud-block</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-block"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-bookmark"></i>
                <span>cloud-bookmark</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-bookmark"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-check"></i>
                <span>cloud-check</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-check"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-computing"></i>
                <span>cloud-computing</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-computing"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-data-connection"></i>
                <span>cloud-data-connection</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-data-connection"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-database-tree"></i>
                <span>cloud-database-tree</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-database-tree"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-download"></i>
                <span>cloud-download</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-download"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-exclamation"></i>
                <span>cloud-exclamation</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-exclamation"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-heart"></i>
                <span>cloud-heart</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-heart"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-info"></i>
                <span>cloud-info</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-info"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-lock"></i>
                <span>cloud-lock</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-lock"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-question"></i>
                <span>cloud-question</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-question"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-redo"></i>
                <span>cloud-redo</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-redo"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-share"></i>
                <span>cloud-share</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-share"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-shield"></i>
                <span>cloud-shield</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-shield"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-slash"></i>
                <span>cloud-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-times"></i>
                <span>cloud-times</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-times"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-unlock"></i>
                <span>cloud-unlock</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-unlock"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-upload"></i>
                <span>cloud-upload</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-upload"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-wifi"></i>
                <span>cloud-wifi</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-wifi"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-code-branch"></i>
                <span>code-branch</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-code-branch"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-columns"></i>
                <span>columns</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-columns"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-data-sharing"></i>
                <span>data-sharing</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-data-sharing"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-database"></i>
                <span>database</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-database"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-database-alt"></i>
                <span>database-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-database-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-grid"></i>
                <span>grid</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-grid"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-server"></i>
                <span>server</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-server"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-server-alt"></i>
                <span>server-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-server-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-server-connection"></i>
                <span>server-connection</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-server-connection"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-server-network"></i>
                <span>server-network</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-server-network"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-server-network-alt"></i>
                <span>server-network-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-server-network-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-servers"></i>
                <span>servers</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-servers"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-web-grid"></i>
                <span>web-grid</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-web-grid"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-web-grid-alt"></i>
                <span>web-grid-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-web-grid-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-web-section"></i>
                <span>web-section</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-web-section"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-web-section-alt"></i>
                <span>web-section-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-web-section-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-window"></i>
                <span>window</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-window"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-window-grid"></i>
                <span>window-grid</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-window-grid"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-window-maximize"></i>
                <span>window-maximize</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-window-maximize"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-window-section"></i>
                <span>window-section</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-window-section"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="communication" className="wrapper pt-16">
        <h2 className="mb-5">Communication</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-calling"></i>
                <span>calling</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-calling"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-desktop-cloud-alt"></i>
                <span>desktop-cloud-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-desktop-cloud-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope"></i>
                <span>envelope</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-add"></i>
                <span>envelope-add</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-add"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-alt"></i>
                <span>envelope-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-block"></i>
                <span>envelope-block</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-block"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-bookmark"></i>
                <span>envelope-bookmark</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-bookmark"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-check"></i>
                <span>envelope-check</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-check"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-download"></i>
                <span>envelope-download</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-download"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-download-alt"></i>
                <span>envelope-download-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-download-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-edit"></i>
                <span>envelope-edit</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-edit"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-exclamation"></i>
                <span>envelope-exclamation</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-exclamation"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-heart"></i>
                <span>envelope-heart</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-heart"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-info"></i>
                <span>envelope-info</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-info"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-lock"></i>
                <span>envelope-lock</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-lock"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-minus"></i>
                <span>envelope-minus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-minus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-open"></i>
                <span>envelope-open</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-open"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-question"></i>
                <span>envelope-question</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-question"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-receive"></i>
                <span>envelope-receive</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-receive"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-redo"></i>
                <span>envelope-redo</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-redo"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-search"></i>
                <span>envelope-search</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-search"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-send"></i>
                <span>envelope-send</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-send"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-share"></i>
                <span>envelope-share</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-share"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-shield"></i>
                <span>envelope-shield</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-shield"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-star"></i>
                <span>envelope-star</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-star"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-times"></i>
                <span>envelope-times</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-times"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-upload"></i>
                <span>envelope-upload</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-upload"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelope-upload-alt"></i>
                <span>envelope-upload-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelope-upload-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-envelopes"></i>
                <span>envelopes</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-envelopes"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-fast-mail"></i>
                <span>fast-mail</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-fast-mail"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-fast-mail-alt"></i>
                <span>fast-mail-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-fast-mail-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-forwaded-call"></i>
                <span>forwaded-call</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-forwaded-call"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-incoming-call"></i>
                <span>incoming-call</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-incoming-call"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-laptop-cloud"></i>
                <span>laptop-cloud</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-laptop-cloud"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-laptop-connection"></i>
                <span>laptop-connection</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-laptop-connection"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-mailbox"></i>
                <span>mailbox</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-mailbox"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-mailbox-alt"></i>
                <span>mailbox-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-mailbox-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-missed-call"></i>
                <span>missed-call</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-missed-call"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-outgoing-call"></i>
                <span>outgoing-call</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-outgoing-call"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-phone"></i>
                <span>phone</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-phone"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-phone-alt"></i>
                <span>phone-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-phone-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-phone-pause"></i>
                <span>phone-pause</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-phone-pause"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-phone-slash"></i>
                <span>phone-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-phone-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-phone-times"></i>
                <span>phone-times</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-phone-times"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-phone-volume"></i>
                <span>phone-volume</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-phone-volume"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-post-stamp"></i>
                <span>post-stamp</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-post-stamp"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-postcard"></i>
                <span>postcard</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-postcard"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-rss-alt"></i>
                <span>rss-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-rss-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="construction" className="wrapper pt-16">
        <h2 className="mb-5">Construction</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-constructor"></i>
                <span>constructor</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-constructor"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-drill"></i>
                <span>drill</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-drill"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-hard-hat"></i>
                <span>hard-hat</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-hard-hat"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-jackhammer"></i>
                <span>jackhammer</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-jackhammer"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-no-entry"></i>
                <span>no-entry</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-no-entry"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-paint-tool"></i>
                <span>paint-tool</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-paint-tool"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-screw"></i>
                <span>screw</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-screw"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-shovel"></i>
                <span>shovel</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-shovel"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-tape"></i>
                <span>tape</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-tape"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-traffic-barrier"></i>
                <span>traffic-barrier</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-traffic-barrier"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-trowel"></i>
                <span>trowel</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-trowel"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-wall"></i>
                <span>wall</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-wall"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-wheel-barrow"></i>
                <span>wheel-barrow</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-wheel-barrow"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="content" className="wrapper pt-16">
        <h2 className="mb-5">Content</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-align"></i>
                <span>align</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-align"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-align-alt"></i>
                <span>align-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-align-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-align-center"></i>
                <span>align-center</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-align-center"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-align-center-alt"></i>
                <span>align-center-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-align-center-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-align-center-justify"></i>
                <span>align-center-justify</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-align-center-justify"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-align-justify"></i>
                <span>align-justify</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-align-justify"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-align-left"></i>
                <span>align-left</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-align-left"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-align-left-justify"></i>
                <span>align-left-justify</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-align-left-justify"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-align-letter-right"></i>
                <span>align-letter-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-align-letter-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-align-right"></i>
                <span>align-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-align-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-align-right-justify"></i>
                <span>align-right-justify</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-align-right-justify"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bars"></i>
                <span>bars</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bars"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bold"></i>
                <span>bold</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bold"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-border-alt"></i>
                <span>border-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-border-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-border-bottom"></i>
                <span>border-bottom</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-border-bottom"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-border-clear"></i>
                <span>border-clear</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-border-clear"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-border-horizontal"></i>
                <span>border-horizontal</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-border-horizontal"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-border-inner"></i>
                <span>border-inner</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-border-inner"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-border-left"></i>
                <span>border-left</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-border-left"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-border-right"></i>
                <span>border-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-border-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-border-top"></i>
                <span>border-top</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-border-top"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-border-vertical"></i>
                <span>border-vertical</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-border-vertical"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-dialpad"></i>
                <span>dialpad</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-dialpad"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-dialpad-alt"></i>
                <span>dialpad-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-dialpad-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-document-layout-center"></i>
                <span>document-layout-center</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-document-layout-center"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-document-layout-left"></i>
                <span>document-layout-left</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-document-layout-left"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-document-layout-right"></i>
                <span>document-layout-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-document-layout-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-english-to-chinese"></i>
                <span>english-to-chinese</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-english-to-chinese"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-font"></i>
                <span>font</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-font"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-grip-horizontal-line"></i>
                <span>grip-horizontal-line</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-grip-horizontal-line"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-hindi-to-chinese"></i>
                <span>hindi-to-chinese</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-hindi-to-chinese"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-italic"></i>
                <span>italic</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-italic"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-language"></i>
                <span>language</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-language"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-left-indent"></i>
                <span>left-indent</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-left-indent"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-left-indent-alt"></i>
                <span>left-indent-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-left-indent-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-left-to-right-text-direction"></i>
                <span>left-to-right-text-direction</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-left-to-right-text-direction"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-letter-chinese-a"></i>
                <span>letter-chinese-a</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-letter-chinese-a"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-letter-english-a"></i>
                <span>letter-english-a</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-letter-english-a"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-letter-hindi-a"></i>
                <span>letter-hindi-a</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-letter-hindi-a"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-letter-japanese-a"></i>
                <span>letter-japanese-a</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-letter-japanese-a"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-list-ui-alt"></i>
                <span>list-ui-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-list-ui-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-list-ul"></i>
                <span>list-ul</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-list-ul"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-paragraph"></i>
                <span>paragraph</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-paragraph"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-right-indent-alt"></i>
                <span>right-indent-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-right-indent-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-right-to-left-text-direction"></i>
                <span>right-to-left-text-direction</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-right-to-left-text-direction"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sigma"></i>
                <span>sigma</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sigma"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sort-amount-down"></i>
                <span>sort-amount-down</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sort-amount-down"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sort-amount-up"></i>
                <span>sort-amount-up</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sort-amount-up"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-subject"></i>
                <span>subject</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-subject"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-text"></i>
                <span>text</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-text"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-text-fields"></i>
                <span>text-fields</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-text-fields"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-text-size"></i>
                <span>text-size</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-text-size"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-text-strike-through"></i>
                <span>text-strike-through</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-text-strike-through"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-underline"></i>
                <span>underline</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-underline"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-wrap-text"></i>
                <span>wrap-text</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-wrap-text"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="design-tools" className="wrapper pt-16">
        <h2 className="mb-5">Design Tools</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-apps"></i>
                <span>apps</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-apps"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-border-out"></i>
                <span>border-out</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-border-out"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bring-bottom"></i>
                <span>bring-bottom</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bring-bottom"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bring-front"></i>
                <span>bring-front</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bring-front"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-brush-alt"></i>
                <span>brush-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-brush-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-circle-layer"></i>
                <span>circle-layer</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-circle-layer"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-compress"></i>
                <span>compress</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-compress"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-compress-lines"></i>
                <span>compress-lines</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-compress-lines"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-compress-v"></i>
                <span>compress-v</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-compress-v"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-crop-alt"></i>
                <span>crop-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-crop-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-crop-alt-rotate-left"></i>
                <span>crop-alt-rotate-left</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-crop-alt-rotate-left"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-crop-alt-rotate-right"></i>
                <span>crop-alt-rotate-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-crop-alt-rotate-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-exclude"></i>
                <span>exclude</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-exclude"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-flip-h"></i>
                <span>flip-h</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-flip-h"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-flip-h-alt"></i>
                <span>flip-h-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-flip-h-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-flip-v"></i>
                <span>flip-v</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-flip-v"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-flip-v-alt"></i>
                <span>flip-v-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-flip-v-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-grids"></i>
                <span>grids</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-grids"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-horizontal-align-center"></i>
                <span>horizontal-align-center</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-horizontal-align-center"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-horizontal-align-left"></i>
                <span>horizontal-align-left</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-horizontal-align-left"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-horizontal-align-right"></i>
                <span>horizontal-align-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-horizontal-align-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-horizontal-distribution-center"></i>
                <span>horizontal-distribution-center</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-horizontal-distribution-center"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-horizontal-distribution-left"></i>
                <span>horizontal-distribution-left</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-horizontal-distribution-left"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-horizontal-distribution-right"></i>
                <span>horizontal-distribution-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-horizontal-distribution-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-icons"></i>
                <span>icons</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-icons"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-illustration"></i>
                <span>illustration</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-illustration"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-image-resize-landscape"></i>
                <span>image-resize-landscape</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-image-resize-landscape"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-image-resize-square"></i>
                <span>image-resize-square</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-image-resize-square"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-layers-alt"></i>
                <span>layers-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-layers-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-line-alt"></i>
                <span>line-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-line-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-line-spacing"></i>
                <span>line-spacing</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-line-spacing"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-minus-path"></i>
                <span>minus-path</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-minus-path"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-object-group"></i>
                <span>object-group</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-object-group"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-object-ungroup"></i>
                <span>object-ungroup</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-object-ungroup"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-palette"></i>
                <span>palette</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-palette"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-panorama-h"></i>
                <span>panorama-h</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-panorama-h"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-panorama-h-alt"></i>
                <span>panorama-h-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-panorama-h-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-panorama-v"></i>
                <span>panorama-v</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-panorama-v"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-pathfinder"></i>
                <span>pathfinder</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-pathfinder"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-pathfinder-unite"></i>
                <span>pathfinder-unite</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-pathfinder-unite"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-repeat"></i>
                <span>repeat</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-repeat"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-ruler"></i>
                <span>ruler</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-ruler"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-ruler-combined"></i>
                <span>ruler-combined</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-ruler-combined"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-shrink"></i>
                <span>shrink</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-shrink"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-spin"></i>
                <span>spin</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-spin"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-square-full"></i>
                <span>square-full</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-square-full"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-table"></i>
                <span>table</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-table"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-th"></i>
                <span>th</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-th"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-th-large"></i>
                <span>th-large</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-th-large"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-th-slash"></i>
                <span>th-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-th-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-vector-square"></i>
                <span>vector-square</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-vector-square"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-vector-square-alt"></i>
                <span>vector-square-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-vector-square-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-vertical-align-bottom"></i>
                <span>vertical-align-bottom</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-vertical-align-bottom"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-vertical-align-center"></i>
                <span>vertical-align-center</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-vertical-align-center"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-vertical-align-top"></i>
                <span>vertical-align-top</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-vertical-align-top"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-vertical-distribute-bottom"></i>
                <span>vertical-distribute-bottom</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-vertical-distribute-bottom"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-vertical-distribution-center"></i>
                <span>vertical-distribution-center</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-vertical-distribution-center"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-vertical-distribution-top"></i>
                <span>vertical-distribution-top</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-vertical-distribution-top"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="devices" className="wrapper pt-16">
        <h2 className="mb-5">Devices</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-circuit"></i>
                <span>circuit</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-circuit"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-desktop"></i>
                <span>desktop</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-desktop"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-desktop-alt"></i>
                <span>desktop-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-desktop-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-hdd"></i>
                <span>hdd</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-hdd"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-laptop"></i>
                <span>laptop</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-laptop"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-mobile-android"></i>
                <span>mobile-android</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-mobile-android"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-mobile-android-alt"></i>
                <span>mobile-android-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-mobile-android-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-modem"></i>
                <span>modem</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-modem"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-monitor"></i>
                <span>monitor</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-monitor"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-mouse"></i>
                <span>mouse</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-mouse"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-mouse-alt"></i>
                <span>mouse-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-mouse-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-mouse-alt-2"></i>
                <span>mouse-alt-2</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-mouse-alt-2"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-print"></i>
                <span>print</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-print"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-processor"></i>
                <span>processor</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-processor"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-tablet"></i>
                <span>tablet</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-tablet"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-webcam"></i>
                <span>webcam</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-webcam"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-weight"></i>
                <span>weight</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-weight"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-wifi-router"></i>
                <span>wifi-router</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-wifi-router"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="education" className="wrapper pt-16">
        <h2 className="mb-5">Education</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-abacus"></i>
                <span>abacus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-abacus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-atom"></i>
                <span>atom</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-atom"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-award"></i>
                <span>award</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-award"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-award-alt"></i>
                <span>award-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-award-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-backpack"></i>
                <span>backpack</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-backpack"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bell-school"></i>
                <span>bell-school</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bell-school"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-book"></i>
                <span>book</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-book"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-book-alt"></i>
                <span>book-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-book-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-book-open"></i>
                <span>book-open</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-book-open"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-brain"></i>
                <span>brain</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-brain"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cell"></i>
                <span>cell</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cell"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-diary"></i>
                <span>diary</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-diary"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-diary-alt"></i>
                <span>diary-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-diary-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-dna"></i>
                <span>dna</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-dna"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-flask"></i>
                <span>flask</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-flask"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-flask-potion"></i>
                <span>flask-potion</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-flask-potion"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-game-structure"></i>
                <span>game-structure</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-game-structure"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-graduation-cap"></i>
                <span>graduation-cap</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-graduation-cap"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-medal"></i>
                <span>medal</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-medal"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-meeting-board"></i>
                <span>meeting-board</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-meeting-board"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-notebooks"></i>
                <span>notebooks</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-notebooks"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-notes"></i>
                <span>notes</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-notes"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-podium"></i>
                <span>podium</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-podium"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-presentation"></i>
                <span>presentation</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-presentation"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-presentation-check"></i>
                <span>presentation-check</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-presentation-check"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-presentation-edit"></i>
                <span>presentation-edit</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-presentation-edit"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-presentation-lines-alt"></i>
                <span>presentation-lines-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-presentation-lines-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-presentation-minus"></i>
                <span>presentation-minus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-presentation-minus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-presentation-play"></i>
                <span>presentation-play</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-presentation-play"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-presentation-plus"></i>
                <span>presentation-plus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-presentation-plus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-presentation-times"></i>
                <span>presentation-times</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-presentation-times"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-robot"></i>
                <span>robot</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-robot"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sperms"></i>
                <span>sperms</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sperms"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-telescope"></i>
                <span>telescope</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-telescope"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="emoji" className="wrapper pt-16">
        <h2 className="mb-5">Emoji</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-angry"></i>
                <span>angry</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-angry"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-annoyed"></i>
                <span>annoyed</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-annoyed"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-annoyed-alt"></i>
                <span>annoyed-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-annoyed-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-confused"></i>
                <span>confused</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-confused"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-dizzy-meh"></i>
                <span>dizzy-meh</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-dizzy-meh"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-emoji"></i>
                <span>emoji</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-emoji"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-frown"></i>
                <span>frown</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-frown"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-grin"></i>
                <span>grin</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-grin"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-grin-tongue-wink"></i>
                <span>grin-tongue-wink</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-grin-tongue-wink"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-grin-tongue-wink-alt"></i>
                <span>grin-tongue-wink-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-grin-tongue-wink-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-kid"></i>
                <span>kid</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-kid"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-laughing"></i>
                <span>laughing</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-laughing"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-meh"></i>
                <span>meh</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-meh"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-meh-alt"></i>
                <span>meh-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-meh-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-meh-closed-eye"></i>
                <span>meh-closed-eye</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-meh-closed-eye"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-nerd"></i>
                <span>nerd</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-nerd"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-ninja"></i>
                <span>ninja</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-ninja"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sad"></i>
                <span>sad</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sad"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sad-cry"></i>
                <span>sad-cry</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sad-cry"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sad-crying"></i>
                <span>sad-crying</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sad-crying"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sad-dizzy"></i>
                <span>sad-dizzy</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sad-dizzy"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sad-squint"></i>
                <span>sad-squint</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sad-squint"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sick"></i>
                <span>sick</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sick"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-silence"></i>
                <span>silence</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-silence"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-silent-squint"></i>
                <span>silent-squint</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-silent-squint"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-smile"></i>
                <span>smile</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-smile"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-smile-beam"></i>
                <span>smile-beam</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-smile-beam"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-smile-dizzy"></i>
                <span>smile-dizzy</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-smile-dizzy"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-smile-squint-wink"></i>
                <span>smile-squint-wink</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-smile-squint-wink"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-smile-squint-wink-alt"></i>
                <span>smile-squint-wink-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-smile-squint-wink-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-smile-wink"></i>
                <span>smile-wink</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-smile-wink"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-smile-wink-alt"></i>
                <span>smile-wink-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-smile-wink-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-squint"></i>
                <span>squint</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-squint"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-surprise"></i>
                <span>surprise</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-surprise"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-unamused"></i>
                <span>unamused</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-unamused"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="file-folder" className="wrapper pt-16">
        <h2 className="mb-5">File and Folder</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-books"></i>
                <span>books</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-books"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-clipboard"></i>
                <span>clipboard</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-clipboard"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-clipboard-alt"></i>
                <span>clipboard-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-clipboard-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-clipboard-blank"></i>
                <span>clipboard-blank</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-clipboard-blank"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-clipboard-notes"></i>
                <span>clipboard-notes</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-clipboard-notes"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-copy"></i>
                <span>copy</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-copy"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-copy-alt"></i>
                <span>copy-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-copy-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-copy-landscape"></i>
                <span>copy-landscape</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-copy-landscape"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-document-info"></i>
                <span>document-info</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-document-info"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file"></i>
                <span>file</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-alt"></i>
                <span>file-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-blank"></i>
                <span>file-blank</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-blank"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-block-alt"></i>
                <span>file-block-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-block-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-bookmark-alt"></i>
                <span>file-bookmark-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-bookmark-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-check"></i>
                <span>file-check</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-check"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-check-alt"></i>
                <span>file-check-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-check-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-contract"></i>
                <span>file-contract</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-contract"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-contract-dollar"></i>
                <span>file-contract-dollar</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-contract-dollar"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-copy-alt"></i>
                <span>file-copy-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-copy-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-download"></i>
                <span>file-download</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-download"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-download-alt"></i>
                <span>file-download-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-download-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-edit-alt"></i>
                <span>file-edit-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-edit-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-exclamation"></i>
                <span>file-exclamation</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-exclamation"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-exclamation-alt"></i>
                <span>file-exclamation-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-exclamation-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-export"></i>
                <span>file-export</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-export"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-graph"></i>
                <span>file-graph</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-graph"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-heart"></i>
                <span>file-heart</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-heart"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-import"></i>
                <span>file-import</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-import"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-info-alt"></i>
                <span>file-info-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-info-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-landscape"></i>
                <span>file-landscape</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-landscape"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-landscape-alt"></i>
                <span>file-landscape-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-landscape-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-lock-alt"></i>
                <span>file-lock-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-lock-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-medical"></i>
                <span>file-medical</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-medical"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-minus"></i>
                <span>file-minus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-minus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-minus-alt"></i>
                <span>file-minus-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-minus-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-network"></i>
                <span>file-network</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-network"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-plus"></i>
                <span>file-plus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-plus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-plus-alt"></i>
                <span>file-plus-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-plus-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-question"></i>
                <span>file-question</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-question"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-question-alt"></i>
                <span>file-question-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-question-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-redo-alt"></i>
                <span>file-redo-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-redo-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-search-alt"></i>
                <span>file-search-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-search-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-share-alt"></i>
                <span>file-share-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-share-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-shield-alt"></i>
                <span>file-shield-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-shield-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-times"></i>
                <span>file-times</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-times"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-times-alt"></i>
                <span>file-times-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-times-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-upload"></i>
                <span>file-upload</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-upload"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-upload-alt"></i>
                <span>file-upload-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-upload-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-files-landscapes"></i>
                <span>files-landscapes</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-files-landscapes"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-files-landscapes-alt"></i>
                <span>files-landscapes-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-files-landscapes-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-folder"></i>
                <span>folder</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-folder"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-folder-check"></i>
                <span>folder-check</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-folder-check"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-folder-download"></i>
                <span>folder-download</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-folder-download"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-folder-exclamation"></i>
                <span>folder-exclamation</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-folder-exclamation"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-folder-heart"></i>
                <span>folder-heart</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-folder-heart"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-folder-info"></i>
                <span>folder-info</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-folder-info"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-folder-lock"></i>
                <span>folder-lock</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-folder-lock"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-folder-medical"></i>
                <span>folder-medical</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-folder-medical"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-folder-minus"></i>
                <span>folder-minus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-folder-minus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-folder-network"></i>
                <span>folder-network</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-folder-network"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-folder-open"></i>
                <span>folder-open</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-folder-open"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-folder-plus"></i>
                <span>folder-plus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-folder-plus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-folder-question"></i>
                <span>folder-question</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-folder-question"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-folder-times"></i>
                <span>folder-times</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-folder-times"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-folder-upload"></i>
                <span>folder-upload</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-folder-upload"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="location-map" className="wrapper pt-16">
        <h2 className="mb-5">Location and Map</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-compass"></i>
                <span>compass</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-compass"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-directions"></i>
                <span>directions</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-directions"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-location-arrow"></i>
                <span>location-arrow</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-location-arrow"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-location-arrow-alt"></i>
                <span>location-arrow-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-location-arrow-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-location-pin-alt"></i>
                <span>location-pin-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-location-pin-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-location-point"></i>
                <span>location-point</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-location-point"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-map"></i>
                <span>map</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-map"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-map-marker"></i>
                <span>map-marker</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-map-marker"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-map-marker-alt"></i>
                <span>map-marker-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-map-marker-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-map-marker-edit"></i>
                <span>map-marker-edit</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-map-marker-edit"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-map-marker-info"></i>
                <span>map-marker-info</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-map-marker-info"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-map-marker-minus"></i>
                <span>map-marker-minus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-map-marker-minus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-map-marker-plus"></i>
                <span>map-marker-plus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-map-marker-plus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-map-marker-question"></i>
                <span>map-marker-question</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-map-marker-question"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-map-marker-shield"></i>
                <span>map-marker-shield</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-map-marker-shield"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-map-pin"></i>
                <span>map-pin</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-map-pin"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-map-pin-alt"></i>
                <span>map-pin-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-map-pin-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-navigator"></i>
                <span>navigator</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-navigator"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sign-alt"></i>
                <span>sign-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sign-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sign-left"></i>
                <span>sign-left</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sign-left"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sign-right"></i>
                <span>sign-right</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sign-right"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="medical" className="wrapper pt-16">
        <h2 className="mb-5">Medical</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-ambulance"></i>
                <span>ambulance</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-ambulance"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-assistive-listening-systems"></i>
                <span>assistive-listening-systems</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-assistive-listening-systems"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-band-aid"></i>
                <span>band-aid</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-band-aid"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-book-medical"></i>
                <span>book-medical</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-book-medical"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-capsule"></i>
                <span>capsule</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-capsule"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-clinic-medical"></i>
                <span>clinic-medical</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-clinic-medical"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-coronavirus"></i>
                <span>coronavirus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-coronavirus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-ear"></i>
                <span>ear</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-ear"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-medical-alt"></i>
                <span>file-medical-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-medical-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-head-side"></i>
                <span>head-side</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-head-side"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-head-side-cough"></i>
                <span>head-side-cough</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-head-side-cough"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-head-side-mask"></i>
                <span>head-side-mask</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-head-side-mask"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-heart-medical"></i>
                <span>heart-medical</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-heart-medical"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-heart-rate"></i>
                <span>heart-rate</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-heart-rate"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-heartbeat"></i>
                <span>heartbeat</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-heartbeat"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-hospital"></i>
                <span>hospital</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-hospital"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-hospital-square-sign"></i>
                <span>hospital-square-sign</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-hospital-square-sign"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-hospital-symbol"></i>
                <span>hospital-symbol</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-hospital-symbol"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-house-user"></i>
                <span>house-user</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-house-user"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-medical-drip"></i>
                <span>medical-drip</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-medical-drip"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-medical-square"></i>
                <span>medical-square</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-medical-square"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-medical-square-full"></i>
                <span>medical-square-full</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-medical-square-full"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-medkit"></i>
                <span>medkit</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-medkit"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-microscope"></i>
                <span>microscope</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-microscope"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-monitor-heart-rate"></i>
                <span>monitor-heart-rate</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-monitor-heart-rate"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-prescription-bottle"></i>
                <span>prescription-bottle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-prescription-bottle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sanitizer"></i>
                <span>sanitizer</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sanitizer"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sanitizer-alt"></i>
                <span>sanitizer-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sanitizer-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-shield-plus"></i>
                <span>shield-plus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-shield-plus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-social-distancing"></i>
                <span>social-distancing</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-social-distancing"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-stethoscope"></i>
                <span>stethoscope</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-stethoscope"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-stethoscope-alt"></i>
                <span>stethoscope-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-stethoscope-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-store-slash"></i>
                <span>store-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-store-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-stretcher"></i>
                <span>stretcher</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-stretcher"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-syringe"></i>
                <span>syringe</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-syringe"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-tablets"></i>
                <span>tablets</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-tablets"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-thermometer"></i>
                <span>thermometer</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-thermometer"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-toilet-paper"></i>
                <span>toilet-paper</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-toilet-paper"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-user-arrows"></i>
                <span>user-arrows</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-user-arrows"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-user-md"></i>
                <span>user-md</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-user-md"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-user-nurse"></i>
                <span>user-nurse</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-user-nurse"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-virus-slash"></i>
                <span>virus-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-virus-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-wheelchair-alt"></i>
                <span>wheelchair-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-wheelchair-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="multimedia" className="wrapper pt-16">
        <h2 className="mb-5">Multimedia</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-airplay"></i>
                <span>airplay</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-airplay"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-backward"></i>
                <span>backward</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-backward"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bolt-slash"></i>
                <span>bolt-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bolt-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-boombox"></i>
                <span>boombox</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-boombox"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-camera"></i>
                <span>camera</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-camera"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-camera-change"></i>
                <span>camera-change</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-camera-change"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-camera-plus"></i>
                <span>camera-plus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-camera-plus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-clapper-board"></i>
                <span>clapper-board</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-clapper-board"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-compact-disc"></i>
                <span>compact-disc</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-compact-disc"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-equal-circle"></i>
                <span>equal-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-equal-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-film"></i>
                <span>film</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-film"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-flower"></i>
                <span>flower</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-flower"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-forward"></i>
                <span>forward</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-forward"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-headphone-slash"></i>
                <span>headphone-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-headphone-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-headphones"></i>
                <span>headphones</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-headphones"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-headphones-alt"></i>
                <span>headphones-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-headphones-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-image"></i>
                <span>image</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-image"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-image-block"></i>
                <span>image-block</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-image-block"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-image-broken"></i>
                <span>image-broken</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-image-broken"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-image-check"></i>
                <span>image-check</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-image-check"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-image-download"></i>
                <span>image-download</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-image-download"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-image-edit"></i>
                <span>image-edit</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-image-edit"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-image-lock"></i>
                <span>image-lock</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-image-lock"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-image-minus"></i>
                <span>image-minus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-image-minus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-image-plus"></i>
                <span>image-plus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-image-plus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-image-question"></i>
                <span>image-question</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-image-question"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-image-redo"></i>
                <span>image-redo</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-image-redo"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-image-search"></i>
                <span>image-search</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-image-search"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-image-share"></i>
                <span>image-share</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-image-share"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-image-shield"></i>
                <span>image-shield</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-image-shield"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-image-times"></i>
                <span>image-times</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-image-times"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-image-upload"></i>
                <span>image-upload</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-image-upload"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-image-v"></i>
                <span>image-v</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-image-v"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-images"></i>
                <span>images</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-images"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-microphone-slash"></i>
                <span>microphone-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-microphone-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-mountains"></i>
                <span>mountains</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-mountains"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-music"></i>
                <span>music</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-music"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-music-note"></i>
                <span>music-note</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-music-note"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-music-tune-slash"></i>
                <span>music-tune-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-music-tune-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-pause"></i>
                <span>pause</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-pause"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-pause-circle"></i>
                <span>pause-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-pause-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-picture"></i>
                <span>picture</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-picture"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-play"></i>
                <span>play</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-play"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-play-circle"></i>
                <span>play-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-play-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-previous"></i>
                <span>previous</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-previous"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-record-audio"></i>
                <span>record-audio</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-record-audio"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-rss-interface"></i>
                <span>rss-interface</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-rss-interface"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-scenery"></i>
                <span>scenery</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-scenery"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-selfie"></i>
                <span>selfie</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-selfie"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-shutter"></i>
                <span>shutter</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-shutter"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-shutter-alt"></i>
                <span>shutter-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-shutter-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-skip-forward"></i>
                <span>skip-forward</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-skip-forward"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-skip-forward-alt"></i>
                <span>skip-forward-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-skip-forward-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-skip-forward-circle"></i>
                <span>skip-forward-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-skip-forward-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-slider-h"></i>
                <span>slider-h</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-slider-h"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-slider-h-range"></i>
                <span>slider-h-range</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-slider-h-range"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sliders-v"></i>
                <span>sliders-v</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sliders-v"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sliders-v-alt"></i>
                <span>sliders-v-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sliders-v-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-step-backward"></i>
                <span>step-backward</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-step-backward"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-step-backward-alt"></i>
                <span>step-backward-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-step-backward-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-step-backward-circle"></i>
                <span>step-backward-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-step-backward-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-step-forward"></i>
                <span>step-forward</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-step-forward"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-stop-circle"></i>
                <span>stop-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-stop-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-ticket"></i>
                <span>ticket</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-ticket"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-video"></i>
                <span>video</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-video"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-video-question"></i>
                <span>video-question</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-video-question"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="photo-tools" className="wrapper pt-16">
        <h2 className="mb-5">Photography Tools</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bright"></i>
                <span>bright</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bright"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-capture"></i>
                <span>capture</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-capture"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-exposure-alt"></i>
                <span>exposure-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-exposure-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-exposure-increase"></i>
                <span>exposure-increase</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-exposure-increase"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-eye"></i>
                <span>eye</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-eye"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-focus"></i>
                <span>focus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-focus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-focus-add"></i>
                <span>focus-add</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-focus-add"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-focus-target"></i>
                <span>focus-target</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-focus-target"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="security" className="wrapper pt-16">
        <h2 className="mb-5">Security</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-keyhole-circle"></i>
                <span>keyhole-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-keyhole-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-keyhole-square"></i>
                <span>keyhole-square</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-keyhole-square"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-keyhole-square-full"></i>
                <span>keyhole-square-full</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-keyhole-square-full"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-lock"></i>
                <span>lock</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-lock"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-lock-access"></i>
                <span>lock-access</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-lock-access"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-lock-alt"></i>
                <span>lock-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-lock-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-lock-open-alt"></i>
                <span>lock-open-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-lock-open-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-padlock"></i>
                <span>padlock</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-padlock"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-shield"></i>
                <span>shield</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-shield"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-shield-check"></i>
                <span>shield-check</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-shield-check"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-shield-exclamation"></i>
                <span>shield-exclamation</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-shield-exclamation"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-shield-question"></i>
                <span>shield-question</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-shield-question"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-shield-slash"></i>
                <span>shield-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-shield-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-unlock"></i>
                <span>unlock</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-unlock"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-unlock-alt"></i>
                <span>unlock-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-unlock-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="shape" className="wrapper pt-16">
        <h2 className="mb-5">Shape</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-circle"></i>
                <span>circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-heart"></i>
                <span>heart</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-heart"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-heart-alt"></i>
                <span>heart-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-heart-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-octagon"></i>
                <span>octagon</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-octagon"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-pentagon"></i>
                <span>pentagon</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-pentagon"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-polygon"></i>
                <span>polygon</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-polygon"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-square"></i>
                <span>square</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-square"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-square-shape"></i>
                <span>square-shape</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-square-shape"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-star"></i>
                <span>star</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-star"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-triangle"></i>
                <span>triangle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-triangle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="shopping" className="wrapper pt-16">
        <h2 className="mb-5">Shopping</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-archive"></i>
                <span>archive</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-archive"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-credit-card-search"></i>
                <span>credit-card-search</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-credit-card-search"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-gift"></i>
                <span>gift</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-gift"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-label"></i>
                <span>label</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-label"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-label-alt"></i>
                <span>label-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-label-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-pricetag-alt"></i>
                <span>pricetag-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-pricetag-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-qrcode-scan"></i>
                <span>qrcode-scan</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-qrcode-scan"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-shop"></i>
                <span>shop</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-shop"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-shopping-bag"></i>
                <span>shopping-bag</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-shopping-bag"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-shopping-basket"></i>
                <span>shopping-basket</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-shopping-basket"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-shopping-cart"></i>
                <span>shopping-cart</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-shopping-cart"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-shopping-cart-alt"></i>
                <span>shopping-cart-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-shopping-cart-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-store"></i>
                <span>store</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-store"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-store-alt"></i>
                <span>store-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-store-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-tag"></i>
                <span>tag</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-tag"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-tag-alt"></i>
                <span>tag-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-tag-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-transaction"></i>
                <span>transaction</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-transaction"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="sign-symbol" className="wrapper pt-16">
        <h2 className="mb-5">Sign and Symbol</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-accessible-icon-alt"></i>
                <span>accessible-icon-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-accessible-icon-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-ban"></i>
                <span>ban</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-ban"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-closed-captioning"></i>
                <span>closed-captioning</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-closed-captioning"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-closed-captioning-slash"></i>
                <span>closed-captioning-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-closed-captioning-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-copyright"></i>
                <span>copyright</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-copyright"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-creative-commons-pd"></i>
                <span>creative-commons-pd</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-creative-commons-pd"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-mars"></i>
                <span>mars</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-mars"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-parking-circle"></i>
                <span>parking-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-parking-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-parking-square"></i>
                <span>parking-square</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-parking-square"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-registered"></i>
                <span>registered</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-registered"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-servicemark"></i>
                <span>servicemark</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-servicemark"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-trademark"></i>
                <span>trademark</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-trademark"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-trademark-circle"></i>
                <span>trademark-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-trademark-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-venus"></i>
                <span>venus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-venus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-wheelchair"></i>
                <span>wheelchair</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-wheelchair"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="sports" className="wrapper pt-16">
        <h2 className="mb-5">Sports</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-baseball-ball"></i>
                <span>baseball-ball</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-baseball-ball"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-basketball"></i>
                <span>basketball</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-basketball"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-basketball-hoop"></i>
                <span>basketball-hoop</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-basketball-hoop"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bowling-ball"></i>
                <span>bowling-ball</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bowling-ball"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-club"></i>
                <span>club</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-club"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-diamond"></i>
                <span>diamond</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-diamond"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-dice-five"></i>
                <span>dice-five</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-dice-five"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-dice-four"></i>
                <span>dice-four</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-dice-four"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-dice-one"></i>
                <span>dice-one</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-dice-one"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-dice-six"></i>
                <span>dice-six</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-dice-six"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-dice-three"></i>
                <span>dice-three</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-dice-three"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-dice-two"></i>
                <span>dice-two</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-dice-two"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-dumbbell"></i>
                <span>dumbbell</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-dumbbell"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-football"></i>
                <span>football</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-football"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-football-ball"></i>
                <span>football-ball</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-football-ball"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-golf-ball"></i>
                <span>golf-ball</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-golf-ball"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-heart-sign"></i>
                <span>heart-sign</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-heart-sign"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-kayak"></i>
                <span>kayak</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-kayak"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-spade"></i>
                <span>spade</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-spade"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-table-tennis"></i>
                <span>table-tennis</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-table-tennis"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-tennis-ball"></i>
                <span>tennis-ball</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-tennis-ball"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-trophy"></i>
                <span>trophy</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-trophy"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-volleyball"></i>
                <span>volleyball</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-volleyball"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="time" className="wrapper pt-16">
        <h2 className="mb-5">Time</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-clock"></i>
                <span>clock</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-clock"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-clock-eight"></i>
                <span>clock-eight</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-clock-eight"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-clock-five"></i>
                <span>clock-five</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-clock-five"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-clock-nine"></i>
                <span>clock-nine</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-clock-nine"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-clock-seven"></i>
                <span>clock-seven</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-clock-seven"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-clock-ten"></i>
                <span>clock-ten</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-clock-ten"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-clock-three"></i>
                <span>clock-three</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-clock-three"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-clock-two"></i>
                <span>clock-two</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-clock-two"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-stopwatch"></i>
                <span>stopwatch</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-stopwatch"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-stopwatch-slash"></i>
                <span>stopwatch-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-stopwatch-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-watch"></i>
                <span>watch</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-watch"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-watch-alt"></i>
                <span>watch-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-watch-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="transport" className="wrapper pt-16">
        <h2 className="mb-5">Transport</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bus"></i>
                <span>bus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bus-alt"></i>
                <span>bus-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bus-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bus-school"></i>
                <span>bus-school</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bus-school"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-car-sideview"></i>
                <span>car-sideview</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-car-sideview"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-car-wash"></i>
                <span>car-wash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-car-wash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-luggage-cart"></i>
                <span>luggage-cart</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-luggage-cart"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-metro"></i>
                <span>metro</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-metro"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-parcel"></i>
                <span>parcel</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-parcel"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-ship"></i>
                <span>ship</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-ship"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-subway"></i>
                <span>subway</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-subway"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-subway-alt"></i>
                <span>subway-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-subway-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-taxi"></i>
                <span>taxi</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-taxi"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-truck"></i>
                <span>truck</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-truck"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-truck-loading"></i>
                <span>truck-loading</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-truck-loading"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="user-interface" className="wrapper pt-16">
        <h2 className="mb-5">User Interface</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-plus-0"></i>
                <span>plus-0</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-plus-0"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-plus-3"></i>
                <span>plus-3</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-plus-3"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-plus-6"></i>
                <span>plus-6</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-plus-6"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-plus-10"></i>
                <span>plus-10</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-plus-10"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-plus-12"></i>
                <span>plus-12</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-plus-12"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-plus-13"></i>
                <span>plus-13</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-plus-13"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-plus-16"></i>
                <span>plus-16</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-plus-16"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-plus-17"></i>
                <span>plus-17</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-plus-17"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-plus-18"></i>
                <span>plus-18</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-plus-18"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-plus-21"></i>
                <span>plus-21</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-plus-21"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-adjust"></i>
                <span>adjust</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-adjust"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-adjust-alt"></i>
                <span>adjust-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-adjust-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-adjust-circle"></i>
                <span>adjust-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-adjust-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-adjust-half"></i>
                <span>adjust-half</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-adjust-half"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-anchor"></i>
                <span>anchor</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-anchor"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-android-phone-slash"></i>
                <span>android-phone-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-android-phone-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-ankh"></i>
                <span>ankh</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-ankh"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-archive-alt"></i>
                <span>archive-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-archive-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-archway"></i>
                <span>archway</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-archway"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-asterisk"></i>
                <span>asterisk</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-asterisk"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-at"></i>
                <span>at</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-at"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-auto-flash"></i>
                <span>auto-flash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-auto-flash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-baby-carriage"></i>
                <span>baby-carriage</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-baby-carriage"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-backspace"></i>
                <span>backspace</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-backspace"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bag-slash"></i>
                <span>bag-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bag-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-balance-scale"></i>
                <span>balance-scale</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-balance-scale"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bath"></i>
                <span>bath</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bath"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-battery-bolt"></i>
                <span>battery-bolt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-battery-bolt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-battery-empty"></i>
                <span>battery-empty</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-battery-empty"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bed"></i>
                <span>bed</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bed"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bed-double"></i>
                <span>bed-double</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bed-double"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bell"></i>
                <span>bell</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bell"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bell-slash"></i>
                <span>bell-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bell-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bluetooth-b"></i>
                <span>bluetooth-b</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bluetooth-b"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bolt"></i>
                <span>bolt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bolt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bolt-alt"></i>
                <span>bolt-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bolt-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bookmark"></i>
                <span>bookmark</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bookmark"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bookmark-full"></i>
                <span>bookmark-full</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bookmark-full"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-box"></i>
                <span>box</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-box"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-brightness"></i>
                <span>brightness</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-brightness"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-brightness-empty"></i>
                <span>brightness-empty</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-brightness-empty"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-brightness-half"></i>
                <span>brightness-half</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-brightness-half"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-brightness-low"></i>
                <span>brightness-low</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-brightness-low"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-brightness-minus"></i>
                <span>brightness-minus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-brightness-minus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-brightness-plus"></i>
                <span>brightness-plus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-brightness-plus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-building"></i>
                <span>building</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-building"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-bullseye"></i>
                <span>bullseye</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-bullseye"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-calculator"></i>
                <span>calculator</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-calculator"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-calendar-slash"></i>
                <span>calendar-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-calendar-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-calender"></i>
                <span>calender</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-calender"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-camera-slash"></i>
                <span>camera-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-camera-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cancel"></i>
                <span>cancel</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cancel"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-car"></i>
                <span>car</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-car"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-car-slash"></i>
                <span>car-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-car-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-card-atm"></i>
                <span>card-atm</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-card-atm"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-check"></i>
                <span>check</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-check"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-check-circle"></i>
                <span>check-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-check-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-check-square"></i>
                <span>check-square</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-check-square"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-coffee"></i>
                <span>coffee</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-coffee"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cog"></i>
                <span>cog</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cog"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-alt-slash"></i>
                <span>comment-alt-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-alt-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-comment-slash"></i>
                <span>comment-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-comment-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-create-dashboard"></i>
                <span>create-dashboard</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-create-dashboard"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-crockery"></i>
                <span>crockery</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-crockery"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cube"></i>
                <span>cube</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cube"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-dashboard"></i>
                <span>dashboard</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-dashboard"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-desktop-alt-slash"></i>
                <span>desktop-alt-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-desktop-alt-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-desktop-slash"></i>
                <span>desktop-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-desktop-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-draggabledots"></i>
                <span>draggabledots</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-draggabledots"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-edit"></i>
                <span>edit</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-edit"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-edit-alt"></i>
                <span>edit-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-edit-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-elipsis-double-v-alt"></i>
                <span>elipsis-double-v-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-elipsis-double-v-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-ellipsis-h"></i>
                <span>ellipsis-h</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-ellipsis-h"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-ellipsis-v"></i>
                <span>ellipsis-v</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-ellipsis-v"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-estate"></i>
                <span>estate</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-estate"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-exclamation"></i>
                <span>exclamation</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-exclamation"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-exclamation-circle"></i>
                <span>exclamation-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-exclamation-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-exclamation-octagon"></i>
                <span>exclamation-octagon</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-exclamation-octagon"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-exclamation-triangle"></i>
                <span>exclamation-triangle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-exclamation-triangle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-external-link-alt"></i>
                <span>external-link-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-external-link-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-eye-slash"></i>
                <span>eye-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-eye-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-favorite"></i>
                <span>favorite</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-favorite"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-feedback"></i>
                <span>feedback</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-feedback"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-fidget-spinner"></i>
                <span>fidget-spinner</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-fidget-spinner"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-lanscape-slash"></i>
                <span>file-lanscape-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-lanscape-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-file-slash"></i>
                <span>file-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-file-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-filter"></i>
                <span>filter</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-filter"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-filter-slash"></i>
                <span>filter-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-filter-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-fire"></i>
                <span>fire</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-fire"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-folder-slash"></i>
                <span>folder-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-folder-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-football-american"></i>
                <span>football-american</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-football-american"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-glass"></i>
                <span>glass</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-glass"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-glass-martini"></i>
                <span>glass-martini</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-glass-martini"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-glass-martini-alt"></i>
                <span>glass-martini-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-glass-martini-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-glass-martini-alt-slash"></i>
                <span>glass-martini-alt-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-glass-martini-alt-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-glass-tea"></i>
                <span>glass-tea</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-glass-tea"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-globe"></i>
                <span>globe</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-globe"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-heart-break"></i>
                <span>heart-break</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-heart-break"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-history"></i>
                <span>history</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-history"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-history-alt"></i>
                <span>history-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-history-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-home"></i>
                <span>home</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-home"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-hourglass"></i>
                <span>hourglass</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-hourglass"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-image-alt-slash"></i>
                <span>image-alt-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-image-alt-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-image-slash"></i>
                <span>image-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-image-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-inbox"></i>
                <span>inbox</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-inbox"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-info"></i>
                <span>info</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-info"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-info-circle"></i>
                <span>info-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-info-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-key-skeleton"></i>
                <span>key-skeleton</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-key-skeleton"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-key-skeleton-alt"></i>
                <span>key-skeleton-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-key-skeleton-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-keyboard"></i>
                <span>keyboard</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-keyboard"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-keyboard-alt"></i>
                <span>keyboard-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-keyboard-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-keyboard-hide"></i>
                <span>keyboard-hide</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-keyboard-hide"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-keyboard-show"></i>
                <span>keyboard-show</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-keyboard-show"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-lamp"></i>
                <span>lamp</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-lamp"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-layer-group"></i>
                <span>layer-group</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-layer-group"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-layer-group-slash"></i>
                <span>layer-group-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-layer-group-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-layers"></i>
                <span>layers</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-layers"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-layers-slash"></i>
                <span>layers-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-layers-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-life-ring"></i>
                <span>life-ring</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-life-ring"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-link"></i>
                <span>link</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-link"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-link-add"></i>
                <span>link-add</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-link-add"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-link-alt"></i>
                <span>link-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-link-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-link-broken"></i>
                <span>link-broken</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-link-broken"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-link-h"></i>
                <span>link-h</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-link-h"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-list-ol"></i>
                <span>list-ol</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-list-ol"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-list-ol-alt"></i>
                <span>list-ol-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-list-ol-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-lock-slash"></i>
                <span>lock-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-lock-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-map-marker-slash"></i>
                <span>map-marker-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-map-marker-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-megaphone"></i>
                <span>megaphone</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-megaphone"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-message"></i>
                <span>message</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-message"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-microphone"></i>
                <span>microphone</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-microphone"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-minus"></i>
                <span>minus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-minus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-minus-circle"></i>
                <span>minus-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-minus-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-minus-square"></i>
                <span>minus-square</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-minus-square"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-minus-square-full"></i>
                <span>minus-square-full</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-minus-square-full"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-mobile-vibrate"></i>
                <span>mobile-vibrate</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-mobile-vibrate"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-money-bill-slash"></i>
                <span>money-bill-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-money-bill-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-multiply"></i>
                <span>multiply</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-multiply"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-newspaper"></i>
                <span>newspaper</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-newspaper"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-package"></i>
                <span>package</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-package"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-paperclip"></i>
                <span>paperclip</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-paperclip"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-pen"></i>
                <span>pen</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-pen"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-pizza-slice"></i>
                <span>pizza-slice</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-pizza-slice"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-plane"></i>
                <span>plane</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-plane"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-plane-arrival"></i>
                <span>plane-arrival</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-plane-arrival"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-plane-departure"></i>
                <span>plane-departure</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-plane-departure"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-plane-fly"></i>
                <span>plane-fly</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-plane-fly"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-plug"></i>
                <span>plug</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-plug"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-plus"></i>
                <span>plus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-plus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-plus-circle"></i>
                <span>plus-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-plus-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-plus-square"></i>
                <span>plus-square</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-plus-square"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-power"></i>
                <span>power</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-power"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-print-slash"></i>
                <span>print-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-print-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-process"></i>
                <span>process</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-process"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-pump"></i>
                <span>pump</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-pump"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-question"></i>
                <span>question</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-question"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-question-circle"></i>
                <span>question-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-question-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-redo"></i>
                <span>redo</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-redo"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-refresh"></i>
                <span>refresh</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-refresh"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-restaurant"></i>
                <span>restaurant</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-restaurant"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-rocket"></i>
                <span>rocket</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-rocket"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-rope-way"></i>
                <span>rope-way</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-rope-way"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-rotate-360"></i>
                <span>rotate-360</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-rotate-360"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-rss"></i>
                <span>rss</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-rss"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-save"></i>
                <span>save</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-save"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-search"></i>
                <span>search</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-search"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-search-alt"></i>
                <span>search-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-search-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-search-minus"></i>
                <span>search-minus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-search-minus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-search-plus"></i>
                <span>search-plus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-search-plus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-setting"></i>
                <span>setting</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-setting"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-share-alt"></i>
                <span>share-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-share-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sign-in-alt"></i>
                <span>sign-in-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sign-in-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sign-out-alt"></i>
                <span>sign-out-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sign-out-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-signal"></i>
                <span>signal</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-signal"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-signal-alt"></i>
                <span>signal-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-signal-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-signin"></i>
                <span>signin</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-signin"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-signout"></i>
                <span>signout</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-signout"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sim-card"></i>
                <span>sim-card</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sim-card"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-space-key"></i>
                <span>space-key</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-space-key"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-spinner"></i>
                <span>spinner</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-spinner"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-spinner-alt"></i>
                <span>spinner-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-spinner-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-star-half-alt"></i>
                <span>star-half-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-star-half-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-streering"></i>
                <span>streering</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-streering"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sun"></i>
                <span>sun</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sun"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-swatchbook"></i>
                <span>swatchbook</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-swatchbook"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-swimmer"></i>
                <span>swimmer</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-swimmer"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sync"></i>
                <span>sync</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sync"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sync-exclamation"></i>
                <span>sync-exclamation</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sync-exclamation"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sync-slash"></i>
                <span>sync-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sync-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-tachometer-fast"></i>
                <span>tachometer-fast</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-tachometer-fast"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-tachometer-fast-alt"></i>
                <span>tachometer-fast-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-tachometer-fast-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-tear"></i>
                <span>tear</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-tear"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-thumbs-down"></i>
                <span>thumbs-down</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-thumbs-down"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-thumbs-up"></i>
                <span>thumbs-up</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-thumbs-up"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-times"></i>
                <span>times</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-times"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-times-circle"></i>
                <span>times-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-times-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-times-square"></i>
                <span>times-square</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-times-square"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-toggle-off"></i>
                <span>toggle-off</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-toggle-off"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-toggle-on"></i>
                <span>toggle-on</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-toggle-on"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-traffic-light"></i>
                <span>traffic-light</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-traffic-light"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-trash"></i>
                <span>trash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-trash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-trash-alt"></i>
                <span>trash-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-trash-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-trees"></i>
                <span>trees</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-trees"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-tv-retro"></i>
                <span>tv-retro</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-tv-retro"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-tv-retro-slash"></i>
                <span>tv-retro-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-tv-retro-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-umbrella"></i>
                <span>umbrella</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-umbrella"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-upload"></i>
                <span>upload</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-upload"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-utensils"></i>
                <span>utensils</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-utensils"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-utensils-alt"></i>
                <span>utensils-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-utensils-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-video-slash"></i>
                <span>video-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-video-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-voicemail"></i>
                <span>voicemail</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-voicemail"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-voicemail-rectangle"></i>
                <span>voicemail-rectangle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-voicemail-rectangle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-volume"></i>
                <span>volume</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-volume"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-volume-down"></i>
                <span>volume-down</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-volume-down"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-volume-mute"></i>
                <span>volume-mute</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-volume-mute"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-volume-off"></i>
                <span>volume-off</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-volume-off"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-volume-up"></i>
                <span>volume-up</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-volume-up"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-wallet"></i>
                <span>wallet</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-wallet"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-water-drop-slash"></i>
                <span>water-drop-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-water-drop-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-water-glass"></i>
                <span>water-glass</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-water-glass"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-wifi"></i>
                <span>wifi</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-wifi"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-wifi-slash"></i>
                <span>wifi-slash</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-wifi-slash"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-wrench"></i>
                <span>wrench</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-wrench"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-x"></i>
                <span>x</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-x"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-x-add"></i>
                <span>x-add</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-x-add"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-yin-yang"></i>
                <span>yin-yang</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-yin-yang"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="users" className="wrapper pt-16">
        <h2 className="mb-5">Users</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-book-reader"></i>
                <span>book-reader</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-book-reader"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-user"></i>
                <span>user</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-user"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-user-check"></i>
                <span>user-check</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-user-check"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-user-circle"></i>
                <span>user-circle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-user-circle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-user-exclamation"></i>
                <span>user-exclamation</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-user-exclamation"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-user-location"></i>
                <span>user-location</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-user-location"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-user-minus"></i>
                <span>user-minus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-user-minus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-user-plus"></i>
                <span>user-plus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-user-plus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-user-square"></i>
                <span>user-square</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-user-square"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-user-times"></i>
                <span>user-times</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-user-times"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-users-alt"></i>
                <span>users-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-users-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="weather" className="wrapper py-16">
        <h2 className="mb-5">Weather</h2>
        <ul className="glyphs row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6 mb-0 text-center">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-celsius"></i>
                <span>celsius</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-celsius"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud"></i>
                <span>cloud</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-drizzle"></i>
                <span>cloud-drizzle</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-drizzle"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-hail"></i>
                <span>cloud-hail</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-hail"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-meatball"></i>
                <span>cloud-meatball</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-meatball"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-moon"></i>
                <span>cloud-moon</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-moon"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-moon-hail"></i>
                <span>cloud-moon-hail</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-moon-hail"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-moon-meatball"></i>
                <span>cloud-moon-meatball</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-moon-meatball"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-moon-rain"></i>
                <span>cloud-moon-rain</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-moon-rain"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-moon-showers"></i>
                <span>cloud-moon-showers</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-moon-showers"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-rain"></i>
                <span>cloud-rain</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-rain"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-rain-sun"></i>
                <span>cloud-rain-sun</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-rain-sun"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-showers"></i>
                <span>cloud-showers</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-showers"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-showers-alt"></i>
                <span>cloud-showers-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-showers-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-showers-heavy"></i>
                <span>cloud-showers-heavy</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-showers-heavy"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-sun"></i>
                <span>cloud-sun</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-sun"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-sun-hail"></i>
                <span>cloud-sun-hail</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-sun-hail"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-sun-meatball"></i>
                <span>cloud-sun-meatball</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-sun-meatball"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-sun-rain"></i>
                <span>cloud-sun-rain</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-sun-rain"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-sun-rain-alt"></i>
                <span>cloud-sun-rain-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-sun-rain-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-sun-tear"></i>
                <span>cloud-sun-tear</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-sun-tear"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-cloud-wind"></i>
                <span>cloud-wind</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-cloud-wind"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-clouds"></i>
                <span>clouds</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-clouds"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-desert"></i>
                <span>desert</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-desert"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-fahrenheit"></i>
                <span>fahrenheit</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-fahrenheit"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-forecastcloud-moon-tear"></i>
                <span>forecastcloud-moon-tear</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-forecastcloud-moon-tear"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-moon"></i>
                <span>moon</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-moon"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-moon-eclipse"></i>
                <span>moon-eclipse</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-moon-eclipse"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-moonset"></i>
                <span>moonset</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-moonset"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-mountains-sun"></i>
                <span>mountains-sun</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-mountains-sun"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-n-a"></i>
                <span>n-a</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-n-a"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-rainbow"></i>
                <span>rainbow</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-rainbow"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-raindrops"></i>
                <span>raindrops</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-raindrops"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-raindrops-alt"></i>
                <span>raindrops-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-raindrops-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-snow-flake"></i>
                <span>snow-flake</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-snow-flake"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-snowflake"></i>
                <span>snowflake</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-snowflake"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-snowflake-alt"></i>
                <span>snowflake-alt</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-snowflake-alt"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-sunset"></i>
                <span>sunset</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-sunset"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-temperature"></i>
                <span>temperature</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-temperature"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-temperature-empty"></i>
                <span>temperature-empty</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-temperature-empty"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-temperature-half"></i>
                <span>temperature-half</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-temperature-half"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-temperature-minus"></i>
                <span>temperature-minus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-temperature-minus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-temperature-plus"></i>
                <span>temperature-plus</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-temperature-plus"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-temperature-quarter"></i>
                <span>temperature-quarter</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-temperature-quarter"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-temperature-three-quarter"></i>
                <span>temperature-three-quarter</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-temperature-three-quarter"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-thunderstorm"></i>
                <span>thunderstorm</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-thunderstorm"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-thunderstorm-moon"></i>
                <span>thunderstorm-moon</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-thunderstorm-moon"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-thunderstorm-sun"></i>
                <span>thunderstorm-sun</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-thunderstorm-sun"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-tornado"></i>
                <span>tornado</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-tornado"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-water"></i>
                <span>water</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-water"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-wind"></i>
                <span>wind</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-wind"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-wind-moon"></i>
                <span>wind-moon</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-wind-moon"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-wind-sun"></i>
                <span>wind-sun</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-wind-sun"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-windsock"></i>
                <span>windsock</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-windsock"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="uil uil-windy"></i>
                <span>windy</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;i className="uil uil-windy"&gt;&lt;/i&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </DocLayout>
  );
};

export default FontIcons;
