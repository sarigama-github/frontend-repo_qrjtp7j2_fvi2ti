import React from 'react';

const categories = [
  { name: 'Delivery', color: 'from-orange-500 to-red-500' },
  { name: 'Dining Out', color: 'from-pink-500 to-rose-500' },
  { name: 'Nightlife', color: 'from-purple-500 to-indigo-500' },
];

const restaurants = [
  {
    id: 1,
    name: 'Bombay Spice Kitchen',
    rating: 4.4,
    time: '30-40 mins',
    cost: '₹300 for one',
    tags: ['North Indian', 'Chinese'],
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Burger Hub',
    rating: 4.2,
    time: '20-30 mins',
    cost: '₹250 for one',
    tags: ['Burgers', 'Fast Food'],
    img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Tandoori Nights',
    rating: 4.6,
    time: '35-45 mins',
    cost: '₹350 for one',
    tags: ['Tandoori', 'Biryani'],
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
  },
];

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b">
        <div className="max-w-sm mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-bold text-lg">Zomato-ish</div>
          <button onClick={onLogout} className="text-sm text-red-600">Logout</button>
        </div>
      </div>

      <div className="max-w-sm mx-auto px-4 pt-4 pb-24">
        <div className="mb-4">
          <input
            className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Search for restaurant, cuisine or a dish"
          />
        </div>

        <div className="grid grid-cols-3 gap-3">
          {categories.map((c) => (
            <div key={c.name} className={`p-4 rounded-2xl text-white bg-gradient-to-br ${c.color} shadow-lg`}>
              <div className="font-semibold text-sm">{c.name}</div>
            </div>
          ))}
        </div>

        <h3 className="mt-6 mb-2 font-semibold text-gray-700">Top picks for you</h3>
        <div className="space-y-4">
          {restaurants.map((r) => (
            <div key={r.id} className="rounded-2xl overflow-hidden bg-white shadow border">
              <div className="h-40 w-full bg-gray-200">
                <img src={r.img} alt={r.name} className="h-40 w-full object-cover" />
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">★ {r.rating}</div>
                </div>
                <div className="text-xs text-gray-500">{r.tags.join(' • ')}</div>
                <div className="mt-2 text-xs text-gray-600">{r.time} • {r.cost}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 inset-x-0 bg-white border-t">
        <div className="max-w-sm mx-auto px-6 py-3 grid grid-cols-4 text-center text-xs">
          <div className="text-red-600 font-semibold">Home</div>
          <div className="text-gray-500">Search</div>
          <div className="text-gray-500">Orders</div>
          <div className="text-gray-500">Profile</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
