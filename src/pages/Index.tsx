import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('main');

  const leagueColors = {
    'Новичок': 'bg-gray-500',
    'Боец': 'bg-green-500', 
    'Стратег': 'bg-blue-500',
    'Эксперт': 'bg-purple-500',
    'Мастер': 'bg-orange-500',
    'Легенда': 'bg-red-500'
  };

  const topPlayers = [
    { name: 'UserPro', rating: 2500, league: 'Легенда', position: 1 },
    { name: 'GameMaster', rating: 2400, league: 'Легенда', position: 2 },
    { name: 'QuizKing', rating: 2350, league: 'Мастер', position: 3 },
    { name: 'BrainPower', rating: 2200, league: 'Мастер', position: 4 },
    { name: 'FastThinker', rating: 2100, league: 'Эксперт', position: 5 }
  ];

  const gameStats = {
    blitz: { record: '15.3 сек', recordHolder: 'UserPro' },
    battle: { record: '8 побед', recordHolder: 'GameMaster' },
    marathon: { record: '57 вопросов', recordHolder: 'QuizKing' }
  };

  const Header = () => (
    <header className="bg-white shadow-md border-b border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Icon name="Trophy" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-primary">QuizMaster</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => setCurrentSection('main')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentSection === 'main' ? 'bg-primary text-white' : 'text-foreground hover:bg-secondary'
                }`}
              >
                Главная
              </button>
              <button 
                onClick={() => setCurrentSection('top')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentSection === 'top' ? 'bg-primary text-white' : 'text-foreground hover:bg-secondary'
                }`}
              >
                Топы
              </button>
              <button 
                onClick={() => setCurrentSection('profile')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentSection === 'profile' ? 'bg-primary text-white' : 'text-foreground hover:bg-secondary'
                }`}
              >
                Профиль
              </button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">Вход</Button>
            <Button size="sm">Регистрация</Button>
          </div>
        </div>
      </div>
    </header>
  );

  const GameModes = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">Выберите режим игры</h2>
        <p className="text-2xl text-muted-foreground">Проверьте свои знания в разных форматах</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 1x1 Mode */}
        <Card className="game-card cursor-pointer group h-96 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border-2 border-primary/20">
          <CardHeader className="text-center h-full flex flex-col justify-center">
            <div className="mx-auto mb-8 p-8 bg-primary/20 rounded-full w-32 h-32 flex items-center justify-center">
              <Icon name="Users" className="text-primary" size={64} />
            </div>
            <CardTitle className="text-4xl mb-4">[ 1x1 ]</CardTitle>
            <p className="text-xl text-muted-foreground mb-6">режим против игрока</p>
            <p className="text-lg mb-8">Ваш рейтинг: <span className="font-bold text-primary text-2xl">1500</span></p>
            <Button size="lg" className="text-xl px-12 py-4 group-hover:bg-primary/90">ИГРАТЬ</Button>
          </CardHeader>
        </Card>

        {/* Blitz Mode */}
        <Card className="game-card cursor-pointer group h-96 bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 border-2 border-orange-300">
          <CardHeader className="text-center h-full flex flex-col justify-center">
            <div className="mx-auto mb-8 p-8 bg-orange-200 rounded-full w-32 h-32 flex items-center justify-center">
              <Icon name="Zap" className="text-orange-600" size={64} />
            </div>
            <CardTitle className="text-4xl mb-4">[ 🚀 БЛИЦ ]</CardTitle>
            <p className="text-xl text-muted-foreground mb-6">НА ВРЕМЯ</p>
            <p className="text-lg mb-8">Рекорд режима: <span className="font-bold text-orange-600 text-2xl">12.4 сек</span> (UserX)</p>
            <Button size="lg" variant="outline" className="text-xl px-12 py-4 border-orange-500 text-orange-600 hover:bg-orange-100">ИГРАТЬ</Button>
          </CardHeader>
        </Card>

        {/* Battle Royale Mode */}
        <Card className="game-card cursor-pointer group h-96 bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 border-2 border-purple-300">
          <CardHeader className="text-center h-full flex flex-col justify-center">
            <div className="mx-auto mb-8 p-8 bg-purple-200 rounded-full w-32 h-32 flex items-center justify-center">
              <Icon name="Crown" className="text-purple-600" size={64} />
            </div>
            <CardTitle className="text-4xl mb-4">[ 👑 КОРОЛЕВСКАЯ БИТВА ]</CardTitle>
            <p className="text-xl text-muted-foreground mb-6">5 ИГРОКОВ</p>
            <p className="text-lg mb-8">Рекорд режима: <span className="font-bold text-purple-600 text-2xl">8 побед</span> (UserY)</p>
            <Button size="lg" variant="outline" className="text-xl px-12 py-4 border-purple-500 text-purple-600 hover:bg-purple-100">ИГРАТЬ</Button>
          </CardHeader>
        </Card>
      </div>

      {/* Marathon Mode - отдельная большая карточка */}
      <div className="mt-8">
        <Card className="game-card cursor-pointer group h-64 bg-gradient-to-r from-green-50 to-emerald-100 hover:from-green-100 hover:to-emerald-200 border-2 border-green-300">
          <CardHeader className="text-center h-full flex flex-row items-center justify-between px-16">
            <div className="flex items-center space-x-8">
              <div className="p-6 bg-green-200 rounded-full w-24 h-24 flex items-center justify-center">
                <Icon name="Target" className="text-green-600" size={48} />
              </div>
              <div className="text-left">
                <CardTitle className="text-4xl mb-2">[ 🏁 МАРАФОН ]</CardTitle>
                <p className="text-xl text-muted-foreground">До первой ошибки</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg mb-4">Рекорд режима: <span className="font-bold text-green-600 text-2xl">57 вопросов</span> (UserZ)</p>
              <Button size="lg" variant="outline" className="text-xl px-12 py-4 border-green-500 text-green-600 hover:bg-green-100">ИГРАТЬ</Button>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );

  const TopPlayers = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">🏆 Топ игроков</h2>
        <p className="text-xl text-muted-foreground">Лучшие игроки всех времен</p>
      </div>

      <Card className="fade-in">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Рейтинг по лигам</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPlayers.map((player) => (
              <div key={player.name} className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                    player.position === 1 ? 'bg-yellow-500' : 
                    player.position === 2 ? 'bg-gray-400' : 
                    player.position === 3 ? 'bg-orange-600' : 'bg-primary'
                  }`}>
                    {player.position}
                  </div>
                  <Avatar>
                    <AvatarFallback>{player.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">{player.name}</p>
                    <p className="text-sm text-muted-foreground">Рейтинг: {player.rating}</p>
                  </div>
                </div>
                <Badge className={`${leagueColors[player.league]} text-white`}>
                  {player.league}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const Profile = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">👤 Профиль игрока</h2>
      </div>

      <Card className="fade-in">
        <CardHeader className="text-center">
          <Avatar className="w-24 h-24 mx-auto mb-4">
            <AvatarFallback className="text-2xl">UP</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl">USERPRO</CardTitle>
          <p className="text-muted-foreground">Рейтинг: 1500 • 5 место в топе</p>
          <Badge className="bg-purple-500 text-white">Эксперт</Badge>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <Icon name="Zap" className="text-orange-500 mx-auto mb-2" size={32} />
              <h3 className="font-bold text-lg">Блиц</h3>
              <p className="text-2xl font-bold text-orange-500">15.3 сек</p>
              <p className="text-sm text-muted-foreground">Лучший результат</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Icon name="Crown" className="text-purple-500 mx-auto mb-2" size={32} />
              <h3 className="font-bold text-lg">Битва</h3>
              <p className="text-2xl font-bold text-purple-500">3 победы</p>
              <p className="text-sm text-muted-foreground">Лучшая серия</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Icon name="Target" className="text-green-500 mx-auto mb-2" size={32} />
              <h3 className="font-bold text-lg">Марафон</h3>
              <p className="text-2xl font-bold text-green-500">32 вопроса</p>
              <p className="text-sm text-muted-foreground">Максимум вопросов</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const Footer = () => (
    <footer className="bg-secondary/20 border-t border-secondary mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Trophy" className="text-primary" size={24} />
              <h3 className="font-bold text-lg">QuizMaster</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Лучшая игровая викторина для тех, кто любит интеллектуальные вызовы.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Игровые режимы</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">1x1 Дуэль</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Блиц</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Королевская битва</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Марафон</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Сообщество</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Рейтинги</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Турниры</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Достижения</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Статистика</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Правила</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Помощь</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Контакты</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Обратная связь</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 QuizMaster. Все права защищены. Сделано с ❤️ для любителей интеллектуальных игр.
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {currentSection === 'main' && (
        <>
          <GameModes />
        </>
      )}
      
      {currentSection === 'top' && <TopPlayers />}
      
      {currentSection === 'profile' && <Profile />}
      
      <Footer />
    </div>
  );
};

export default Index;