(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').style.visibility="hidden";//隐藏
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('I'))
        .then(() => engine.shake())
        .then(() => engine.toText('L'))
        .then(() => engine.shake())
        .then(() => engine.toText('O'))
        .then(() => engine.shake())
        .then(() => engine.toText('V'))
        .then(() => engine.shake())
        .then(() => engine.toText('E'))
        .then(() => engine.shake())
        .then(() => engine.toText('Y'))
        .then(() => engine.shake())
        .then(() => engine.toText('O'))
        .then(() => engine.shake())
        .then(() => engine.toText('U'))
        .then(() => engine.shake())
        .then(() => engine.toText('I LOVE YOU'))
        .then(() => engine.shake())
        .then(() => engine.toText('我亲爱的小可爱'))
        .then(() => engine.shake())
        .then(() => engine.toText('在这个特殊的日子里'))
        .then(() => engine.shake())
        .then(() => engine.toText('想对你说'))
        .then(() => engine.shake())
        .then(() => engine.toText('我爱你'))
        .then(() => engine.shake())
        .then(() => engine.toText('我走过的路'))
        .then(() => engine.shake())
        .then(() => engine.toText('有泥泞'))
        .then(() => engine.shake())
        .then(() => engine.toText('有平坦'))
        .then(() => engine.shake())
        .then(() => engine.toText('有快乐'))
        .then(() => engine.shake())
        .then(() => engine.toText('有悲伤'))
        .then(() => engine.shake())
        .then(() => engine.toText('我看过的风景'))
        .then(() => engine.shake())
        .then(() => engine.toText('有大漠孤烟'))
        .then(() => engine.shake())
        .then(() => engine.toText('有高山大海'))
        .then(() => engine.shake())
        .then(() => engine.toText('有废墟丛林'))
        .then(() => engine.shake())
        .then(() => engine.toText('我见过很多人'))
        .then(() => engine.shake())
        .then(() => engine.toText('有意思的'))
        .then(() => engine.shake())
        .then(() => engine.toText('没意思的'))
        .then(() => engine.shake())
        .then(() => engine.toText('唯独你'))
        .then(() => engine.shake())
        .then(() => engine.toText('是我人间理想'))
        .then(() => engine.shake())
        .then(() => engine.toText('在我的世界中'))
        .then(() => engine.shake())
        .then(() => engine.toText('万物皆是你'))
        .then(() => engine.shake())
        .then(() => engine.toText('万物皆非你'))
        .then(() => engine.shake())
        .then(() => engine.toText('我爱你'))
        .then(() => engine.shake())
        .then(() => engine.toText('万万万万年'))
        .then(() => engine.shake())
        .then(() => engine.toText('爱你的小朋友'))
        .then(() => engine.shake())
        // .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
