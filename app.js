// ====== Data ======
const summaryData = [
  {label:'Total Revenue', value:'$284,510', change:12.4, up:true, icon:'fa-dollar-sign', color:'#16a34a', soft:'#dcfce7'},
  {label:'Total Orders', value:'2,847', change:8.2, up:true, icon:'fa-bag-shopping', color:'#4f46e5', soft:'#eef2ff'},
  {label:'Total Customers', value:'8,492', change:5.1, up:true, icon:'fa-users', color:'#7c3aed', soft:'#ede9fe'},
  {label:'Total Products', value:'1,284', change:-2.3, up:false, icon:'fa-box', color:'#06b6d4', soft:'#cffafe'},
  {label:'Pending Orders', value:'12', change:4, up:true, icon:'fa-clock', color:'#f59e0b', soft:'#fef3c7'},
  {label:'Low Stock', value:'42', change:-12, up:false, icon:'fa-triangle-exclamation', color:'#dc2626', soft:'#fee2e2'},
];

const recentOrders = [
  {id:'ORD-1048', customer:'Sarah Johnson', product:'Wireless Headphones X1', date:'Oct 12, 2024', amount:'$258.00', payStatus:'Paid', status:'Shipped', avatar:'SJ', color:'#4f46e5'},
  {id:'ORD-1047', customer:'Michael Chen', product:'Smart Watch Pro', date:'Oct 12, 2024', amount:'$399.00', payStatus:'Pending', status:'Processing', avatar:'MC', color:'#7c3aed'},
  {id:'ORD-1046', customer:'Emma Wilson', product:'Bluetooth Speaker', date:'Oct 11, 2024', amount:'$129.00', payStatus:'Paid', status:'Delivered', avatar:'EW', color:'#06b6d4'},
  {id:'ORD-1045', customer:'James Brown', product:'USB-C Hub', date:'Oct 11, 2024', amount:'$79.00', payStatus:'Failed', status:'Pending', avatar:'JB', color:'#f59e0b'},
  {id:'ORD-1044', customer:'Lisa Anderson', product:'4K Webcam', date:'Oct 10, 2024', amount:'$189.00', payStatus:'Paid', status:'Confirmed', avatar:'LA', color:'#16a34a'},
  {id:'ORD-1043', customer:'David Garcia', product:'Mechanical Keyboard', date:'Oct 10, 2024', amount:'$149.00', payStatus:'Refunded', status:'Delivered', avatar:'DG', color:'#dc2626'},
];

const products = [
  {name:'Wireless Headphones X1', sku:'WHX-001', cat:'Electronics', price:'$129.00', stock:8, status:'Low Stock', updated:'2h ago', color:'#4f46e5', img:'fa-headphones'},
  {name:'Smart Watch Pro', sku:'SWP-002', cat:'Electronics', price:'$299.00', stock:12, status:'Low Stock', updated:'5h ago', color:'#7c3aed', img:'fa-clock'},
  {name:'Bluetooth Speaker', sku:'BTS-003', cat:'Electronics', price:'$89.00', stock:84, status:'In Stock', updated:'1d ago', color:'#06b6d4', img:'fa-volume-high'},
  {name:'USB-C Hub 7-in-1', sku:'UCH-004', cat:'Accessories', price:'$49.00', stock:0, status:'Out of Stock', updated:'3d ago', color:'#f59e0b', img:'fa-plug'},
  {name:'4K Webcam', sku:'KWC-005', cat:'Electronics', price:'$189.00', stock:124, status:'In Stock', updated:'6h ago', color:'#16a34a', img:'fa-camera'},
  {name:'Mechanical Keyboard', sku:'MKB-006', cat:'Accessories', price:'$149.00', stock:42, status:'In Stock', updated:'1d ago', color:'#dc2626', img:'fa-keyboard'},
  {name:'Gaming Mouse RGB', sku:'GMR-007', cat:'Accessories', price:'$79.00', stock:0, status:'Out of Stock', updated:'4d ago', color:'#8b5cf6', img:'fa-computer-mouse'},
  {name:'Portable SSD 1TB', sku:'PSS-008', cat:'Electronics', price:'$129.00', stock:56, status:'In Stock', updated:'8h ago', color:'#0ea5e9', img:'fa-hard-drive'},
];

const customers = [
  {name:'Sarah Johnson', email:'sarah.j@email.com', location:'Portland, OR', orders:24, spent:'$2,840', joined:'Jan 2023', status:'Active', avatar:'SJ', color:'#4f46e5'},
  {name:'Michael Chen', email:'m.chen@email.com', location:'San Francisco, CA', orders:18, spent:'$3,210', joined:'Mar 2023', status:'Active', avatar:'MC', color:'#7c3aed'},
  {name:'Emma Wilson', email:'emma.w@email.com', location:'New York, NY', orders:42, spent:'$5,840', joined:'Aug 2022', status:'Active', avatar:'EW', color:'#06b6d4'},
  {name:'James Brown', email:'j.brown@email.com', location:'Austin, TX', orders:8, spent:'$920', joined:'Jun 2023', status:'Inactive', avatar:'JB', color:'#f59e0b'},
  {name:'Lisa Anderson', email:'lisa.a@email.com', location:'Seattle, WA', orders:31, spent:'$4,180', joined:'Feb 2023', status:'Active', avatar:'LA', color:'#16a34a'},
  {name:'David Garcia', email:'d.garcia@email.com', location:'Miami, FL', orders:15, spent:'$2,140', joined:'Sep 2023', status:'Active', avatar:'DG', color:'#dc2626'},
];

const payments = [
  {tx:'TXN-9821', order:'ORD-1048', customer:'Sarah Johnson', method:'Visa ••4242', amount:'$258.00', date:'Oct 12, 2024', status:'Paid'},
  {tx:'TXN-9820', order:'ORD-1047', customer:'Michael Chen', method:'Mastercard ••8821', amount:'$399.00', date:'Oct 12, 2024', status:'Pending'},
  {tx:'TXN-9819', order:'ORD-1046', customer:'Emma Wilson', method:'PayPal', amount:'$129.00', date:'Oct 11, 2024', status:'Paid'},
  {tx:'TXN-9818', order:'ORD-1045', customer:'James Brown', method:'Visa ••1042', amount:'$79.00', date:'Oct 11, 2024', status:'Failed'},
  {tx:'TXN-9817', order:'ORD-1044', customer:'Lisa Anderson', method:'Apple Pay', amount:'$189.00', date:'Oct 10, 2024', status:'Paid'},
  {tx:'TXN-9816', order:'ORD-1043', customer:'David Garcia', method:'Visa ••7251', amount:'$149.00', date:'Oct 10, 2024', status:'Refunded'},
];

const notifications = [
  {type:'order', icon:'fa-bag-shopping', color:'#4f46e5', title:'New order #ORD-1048 received', time:'2 minutes ago', unread:true, desc:'Sarah Johnson placed an order worth $258.00'},
  {type:'stock', icon:'fa-triangle-exclamation', color:'#f59e0b', title:'Low stock alert: Wireless Headphones X1', time:'18 minutes ago', unread:true, desc:'Only 8 units remaining in stock'},
  {type:'payment', icon:'fa-credit-card', color:'#16a34a', title:'Payment received: $189.00', time:'1 hour ago', unread:true, desc:'Payment for order ORD-1044 has been processed'},
  {type:'customer', icon:'fa-user-plus', color:'#7c3aed', title:'New customer registration', time:'2 hours ago', unread:true, desc:'Olivia Martinez created an account'},
  {type:'cloud', icon:'fa-cloud-arrow-up', color:'#06b6d4', title:'Cloud backup completed successfully', time:'2 hours ago', unread:false, desc:'Automatic backup of 84 GB completed'},
  {type:'system', icon:'fa-server', color:'#dc2626', title:'CDN performance degraded', time:'3 hours ago', unread:false, desc:'Cache hit rate dropped to 84% on edge servers'},
  {type:'order', icon:'fa-truck', color:'#16a34a', title:'Order #ORD-1043 delivered', time:'5 hours ago', unread:false, desc:'Package delivered to David Garcia'},
];

const categories = [
  {name:'Electronics', count:482, color:'#4f46e5', icon:'fa-laptop'},
  {name:'Fashion', count:318, color:'#7c3aed', icon:'fa-shirt'},
  {name:'Home & Living', count:204, color:'#06b6d4', icon:'fa-couch'},
  {name:'Sports & Fitness', count:148, color:'#16a34a', icon:'fa-dumbbell'},
  {name:'Beauty', count:89, color:'#ec4899', icon:'fa-spray-can'},
  {name:'Books', count:43, color:'#f59e0b', icon:'fa-book'},
];

const discounts = [
  {code:'WELCOME10', desc:'10% off first order', used:342, limit:1000, status:'Active'},
  {code:'SUMMER25', desc:'25% summer sale', used:1820, limit:2000, status:'Active'},
  {code:'FREESHIP', desc:'Free shipping', used:921, limit:5000, status:'Active'},
  {code:'BLACKFRI50', desc:'50% Black Friday', used:0, limit:10000, status:'Scheduled'},
  {code:'FLASH15', desc:'15% flash sale', used:1240, limit:1240, status:'Expired'},
  {code:'VIP30', desc:'30% VIP members', used:184, limit:500, status:'Active'},
];

const backups = [
  {id:'BKP-2941', type:'Full', size:'84 GB', date:'Oct 12, 2024 14:00', dur:'12 min', status:'Success'},
  {id:'BKP-2940', type:'Incremental', size:'4.2 GB', date:'Oct 12, 2024 08:00', dur:'3 min', status:'Success'},
  {id:'BKP-2939', type:'Incremental', size:'3.8 GB', date:'Oct 12, 2024 02:00', dur:'3 min', status:'Success'},
  {id:'BKP-2938', type:'Full', size:'82 GB', date:'Oct 11, 2024 14:00', dur:'11 min', status:'Success'},
  {id:'BKP-2937', type:'Incremental', size:'5.1 GB', date:'Oct 11, 2024 08:00', dur:'4 min', status:'Success'},
  {id:'BKP-2936', type:'Incremental', size:'2.1 GB', date:'Oct 11, 2024 02:00', dur:'2 min', status:'Failed'},
];

// ====== Helpers ======
function $(s){ return document.querySelector(s); }
function $$(s){ return document.querySelectorAll(s); }
function showToast(msg){
  const t = $('#toast'); $('#toastMsg').textContent = msg;
  t.classList.remove('hidden'); t.classList.add('flex');
  setTimeout(()=>{ t.classList.add('hidden'); }, 2500);
}
function statusBadge(s){
  const map = { 'Paid':'badge-success','Pending':'badge-warning','Failed':'badge-danger','Refunded':'badge-danger','Shipped':'badge-info','Processing':'badge-warning','Delivered':'badge-success','Confirmed':'badge-info','In Stock':'badge-success','Low Stock':'badge-warning','Out of Stock':'badge-danger','Active':'badge-success','Inactive':'badge-neutral','Draft':'badge-warning','Scheduled':'badge-info','Expired':'badge-neutral','Success':'badge-success' };
  return `<span class="badge ${map[s]||'badge-neutral'}">${s}</span>`;
}

// ====== Render Summary Cards ======
function renderSummary(){
  $('#summaryCards').innerHTML = summaryData.map(c=>`
    <div class="card p-4 hover:shadow-lg transition-shadow fade-in">
      <div class="flex items-center justify-between mb-3">
        <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:${c.soft}; color:${c.color}"><i class="fa-solid ${c.icon}"></i></div>
        <span class="text-xs font-semibold ${c.up?'text-green-600':'text-red-500'}"><i class="fa-solid fa-arrow-${c.up?'up':'down'}"></i> ${Math.abs(c.change)}%</span>
      </div>
      <div class="text-2xl font-bold">${c.value}</div>
      <div class="text-xs muted mt-1">${c.label}</div>
      <div class="text-[11px] muted mt-1">vs last period</div>
    </div>
  `).join('');
}

// ====== Charts ======
let chartInstances = {};
function destroyCharts(){
  Object.values(chartInstances).forEach(c=>c&&c.destroy&&c.destroy());
  chartInstances = {};
}
function chartColors(){
  return {
    grid: document.body.classList.contains('dark') ? '#1f2937' : '#eef2f7',
    text: document.body.classList.contains('dark') ? '#94a3b8' : '#64748b'
  };
}
function buildCharts(){
  destroyCharts();
  const c = chartColors();
  const opts = { responsive:true, maintainAspectRatio:false, plugins:{legend:{labels:{color:c.text, font:{size:11}}}}, scales:{x:{grid:{color:c.grid}, ticks:{color:c.text, font:{size:11}}}, y:{grid:{color:c.grid}, ticks:{color:c.text, font:{size:11}}}} };

  // Revenue
  chartInstances.rev = new Chart($('#revenueChart'), {
    type:'line',
    data:{ labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct'], datasets:[
      {label:'Revenue', data:[18,22,19,28,24,32,30,36,34,42], borderColor:'#4f46e5', backgroundColor:'rgba(79,70,229,.1)', fill:true, tension:.4, borderWidth:3, pointBackgroundColor:'#4f46e5', pointRadius:4 },
      {label:'Last Year', data:[14,16,18,20,22,24,26,28,30,32], borderColor:'#cbd5e1', borderDash:[6,6], fill:false, tension:.4, pointRadius:0 }
    ]},
    options:{...opts, plugins:{...opts.plugins, legend:{display:true, position:'top', align:'end'}}}
  });

  // Order status doughnut
  chartInstances.os = new Chart($('#orderStatusChart'), {
    type:'doughnut',
    data:{ labels:['Delivered','Shipped','Processing','Pending','Confirmed'], datasets:[{data:[147,42,19,12,28], backgroundColor:['#16a34a','#4f46e5','#f59e0b','#dc2626','#06b6d4'], borderWidth:0}] },
    options:{ responsive:true, maintainAspectRatio:false, cutout:'65%', plugins:{legend:{position:'bottom', labels:{color:c.text, font:{size:11}, padding:10, boxWidth:10}}} }
  });

  // Customer growth
  chartInstances.cu = new Chart($('#customerChart'), {
    type:'bar',
    data:{ labels:['Apr','May','Jun','Jul','Aug','Sep','Oct'], datasets:[
      {label:'New', data:[180,210,240,280,310,340,320], backgroundColor:'#4f46e5', borderRadius:6 },
      {label:'Returning', data:[420,460,480,510,540,580,620], backgroundColor:'#c7d2fe', borderRadius:6 }
    ]},
    options:{...opts, plugins:{legend:{labels:{color:c.text, font:{size:11}, boxWidth:10}},}}
  });

  // Category
  chartInstances.cat = new Chart($('#categoryChart'), {
    type:'polarArea',
    data:{ labels:['Electronics','Fashion','Home','Sports','Beauty'], datasets:[{data:[482,318,204,148,89], backgroundColor:['#4f46e5','#7c3aed','#06b6d4','#16a34a','#ec4899']}] },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'bottom', labels:{color:c.text, font:{size:10}, boxWidth:10}}}, scales:{r:{grid:{color:c.grid}, ticks:{display:false}}}}
  });

  // Inventory
  chartInstances.inv = new Chart($('#inventoryChart'), {
    type:'line',
    data:{ labels:Array.from({length:30},(_,i)=>i+1), datasets:[
      {label:'Stock In', data:Array.from({length:30},()=>Math.floor(Math.random()*200)+800), borderColor:'#16a34a', backgroundColor:'rgba(22,163,74,.1)', fill:true, tension:.4, pointRadius:0, borderWidth:2},
      {label:'Stock Out', data:Array.from({length:30},()=>Math.floor(Math.random()*100)+40), borderColor:'#dc2626', backgroundColor:'rgba(220,38,38,.1)', fill:true, tension:.4, pointRadius:0, borderWidth:2}
    ]},
    options:{...opts, plugins:{legend:{labels:{color:c.text, font:{size:11}, boxWidth:10}}}}
  });

  // Analytics
  chartInstances.ar = new Chart($('#analyticsRevenue'), {
    type:'line',
    data:{ labels:['W1','W2','W3','W4','W5','W6','W7','W8'], datasets:[
      {label:'Gross', data:[42,48,45,52,58,54,62,68], borderColor:'#4f46e5', backgroundColor:'rgba(79,70,229,.1)', fill:true, tension:.4, borderWidth:2},
      {label:'Net', data:[38,42,40,46,52,48,56,62], borderColor:'#16a34a', backgroundColor:'rgba(22,163,74,.1)', fill:true, tension:.4, borderWidth:2}
    ]},
    options:opts
  });
  chartInstances.ac = new Chart($('#analyticsChannels'), {
    type:'doughnut',
    data:{ labels:['Organic','Social','Direct','Email','Referral'], datasets:[{data:[38,24,18,12,8], backgroundColor:['#4f46e5','#7c3aed','#06b6d4','#16a34a','#f59e0b'], borderWidth:0}] },
    options:{ responsive:true, maintainAspectRatio:false, cutout:'60%', plugins:{legend:{position:'right', labels:{color:c.text, font:{size:11}, boxWidth:10}}} }
  });
  chartInstances.ao = new Chart($('#analyticsOrders'), {
    type:'bar',
    data:{ labels:['W1','W2','W3','W4','W5','W6','W7','W8'], datasets:[{label:'Avg Order Value', data:[78,82,80,86,84,90,88,94], backgroundColor:'#4f46e5', borderRadius:6}] },
    options:opts
  });

  // Storage donut
  chartInstances.st = new Chart($('#storageChart'), {
    type:'doughnut',
    data:{ labels:['Used','Free'], datasets:[{data:[576,274], backgroundColor:['#4f46e5','#e2e8f0'], borderWidth:0}] },
    options:{ responsive:true, maintainAspectRatio:false, cutout:'75%', plugins:{legend:{display:false}} }
  });
}

// ====== Render Tables ======
function renderRecentOrders(){
  $('#recentOrdersBody').innerHTML = recentOrders.map(o=>`
    <tr class="border-b" style="border-color:var(--border)">
      <td class="py-3 px-2 font-medium">${o.id}</td>
      <td class="py-3 px-2"><div class="flex items-center gap-2"><div class="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-semibold" style="background:${o.color}">${o.avatar}</div>${o.customer}</div></td>
      <td class="py-3 px-2 muted">${o.product}</td>
      <td class="py-3 px-2 muted">${o.date}</td>
      <td class="py-3 px-2 font-semibold">${o.amount}</td>
      <td class="py-3 px-2">${statusBadge(o.payStatus)}</td>
      <td class="py-3 px-2">${statusBadge(o.status)}</td>
      <td class="py-3 px-2"><button class="text-muted hover:text-indigo-500"><i class="fa-solid fa-eye"></i></button></td>
    </tr>
  `).join('');
}

function renderOrdersFull(){
  const all = [...recentOrders, ...recentOrders.slice(0,4).map((o,i)=>({...o, id:'ORD-104'+(2-i)}))];
  $('#ordersFullBody').innerHTML = all.map(o=>`
    <tr class="border-b cursor-pointer" style="border-color:var(--border)" onclick="selectOrder('${o.id}')">
      <td class="py-3 px-2 font-medium">${o.id}</td>
      <td class="py-3 px-2"><div class="flex items-center gap-2"><div class="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-semibold" style="background:${o.color}">${o.avatar}</div>${o.customer}</div></td>
      <td class="py-3 px-2 muted">${o.date}</td>
      <td class="py-3 px-2 font-semibold">${o.amount}</td>
      <td class="py-3 px-2">${statusBadge(o.payStatus)}</td>
      <td class="py-3 px-2">${statusBadge(o.status)}</td>
      <td class="py-3 px-2"><button class="text-muted hover:text-indigo-500" onclick="event.stopPropagation();selectOrder('${o.id}')"><i class="fa-solid fa-arrow-right"></i></button></td>
    </tr>
  `).join('');
}

const timelineSteps = [
  {label:'Order Placed', date:'Oct 12, 14:32', done:true, icon:'fa-check', color:'#16a34a'},
  {label:'Confirmed', date:'Oct 12, 14:48', done:true, icon:'fa-check', color:'#16a34a'},
  {label:'Processing', date:'Oct 12, 16:20', done:true, icon:'fa-check', color:'#16a34a'},
  {label:'Shipped', date:'Oct 13, 09:15', done:true, icon:'fa-truck', color:'#4f46e5'},
  {label:'Delivered', date:'Estimated Oct 15', done:false, icon:'fa-clock', color:'#cbd5e1'},
];
function renderTimeline(){
  $('#timelineItems').innerHTML = timelineSteps.map((s,i)=>`
    <div class="relative flex items-start gap-3">
      <div class="absolute -left-6 w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-semibold z-10" style="background:${s.color}; border:3px solid var(--card)"><i class="fa-solid ${s.icon}"></i></div>
      <div class="ml-6 pt-2">
        <div class="text-sm font-semibold ${s.done?'':'muted'}">${s.label}</div>
        <div class="text-xs muted">${s.date}</div>
      </div>
    </div>
  `).join('');
}
function selectOrder(id){
  $('#odId').textContent = '#'+id;
}

function renderProducts(){
  $('#productsBody').innerHTML = products.map(p=>`
    <tr class="border-b" style="border-color:var(--border)">
      <td class="py-3 px-2"><input type="checkbox"></td>
      <td class="py-3 px-2"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-lg flex items-center justify-center text-white" style="background:${p.color}"><i class="fa-solid ${p.img}"></i></div><div><div class="font-medium">${p.name}</div><div class="text-xs muted">Premium quality</div></div></div></td>
      <td class="py-3 px-2 muted">${p.sku}</td>
      <td class="py-3 px-2 muted">${p.cat}</td>
      <td class="py-3 px-2 font-semibold">${p.price}</td>
      <td class="py-3 px-2"><span class="font-medium">${p.stock}</span></td>
      <td class="py-3 px-2">${statusBadge(p.status)}</td>
      <td class="py-3 px-2 muted text-xs">${p.updated}</td>
      <td class="py-3 px-2"><div class="flex gap-1"><button onclick="openProductModal('${p.name}')" class="w-7 h-7 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-muted"><i class="fa-solid fa-pen text-xs"></i></button><button class="w-7 h-7 rounded hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500"><i class="fa-solid fa-trash text-xs"></i></button></div></td>
    </tr>
  `).join('');
}

function renderCustomers(){
  $('#customersBody').innerHTML = customers.map(c=>`
    <tr class="border-b" style="border-color:var(--border)">
      <td class="py-3 px-2"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-semibold" style="background:${c.color}">${c.avatar}</div>${c.name}</div></td>
      <td class="py-3 px-2 muted">${c.email}</td>
      <td class="py-3 px-2 muted">${c.location}</td>
      <td class="py-3 px-2 font-medium">${c.orders}</td>
      <td class="py-3 px-2 font-semibold">${c.spent}</td>
      <td class="py-3 px-2 muted">${c.joined}</td>
      <td class="py-3 px-2">${statusBadge(c.status)}</td>
      <td class="py-3 px-2"><button class="text-muted hover:text-indigo-500"><i class="fa-solid fa-eye"></i></button></td>
    </tr>
  `).join('');
}

function renderPayments(){
  $('#paymentsBody').innerHTML = payments.map(p=>`
    <tr class="border-b" style="border-color:var(--border)">
      <td class="py-3 px-2 font-medium">${p.tx}</td>
      <td class="py-3 px-2 muted">${p.order}</td>
      <td class="py-3 px-2">${p.customer}</td>
      <td class="py-3 px-2 muted">${p.method}</td>
      <td class="py-3 px-2 font-semibold">${p.amount}</td>
      <td class="py-3 px-2 muted">${p.date}</td>
      <td class="py-3 px-2">${statusBadge(p.status)}</td>
    </tr>
  `).join('');
}

function renderCategories(){
  $('#categoriesGrid').innerHTML = categories.map(c=>`
    <div class="card p-5 hover:shadow-lg transition-shadow cursor-pointer fade-in">
      <div class="flex items-center justify-between mb-4">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl" style="background:${c.color}"><i class="fa-solid ${c.icon}"></i></div>
        <button class="text-muted hover:text-indigo-500"><i class="fa-solid fa-ellipsis"></i></button>
      </div>
      <div class="font-semibold">${c.name}</div>
      <div class="text-xs muted mt-1">${c.count} products</div>
      <div class="h-1.5 rounded-full bg-gray-100 dark:bg-gray-800 mt-3"><div class="h-1.5 rounded-full" style="width:${Math.min(c.count/5,100)}%; background:${c.color}"></div></div>
    </div>
  `).join('');
}

function renderDiscounts(){
  $('#discountsGrid').innerHTML = discounts.map(d=>`
    <div class="card p-5 fade-in">
      <div class="flex items-center justify-between mb-3">
        <div class="font-mono font-bold text-lg" style="color:var(--primary)">${d.code}</div>
        ${statusBadge(d.status)}
      </div>
      <div class="text-sm font-medium mb-1">${d.desc}</div>
      <div class="text-xs muted mb-3">${d.used} / ${d.limit} used</div>
      <div class="h-1.5 rounded-full bg-gray-100 dark:bg-gray-800"><div class="h-1.5 rounded-full" style="width:${(d.used/d.limit)*100}%; background:var(--primary)"></div></div>
      <div class="flex justify-end gap-2 mt-4">
        <button class="px-3 py-1.5 text-xs rounded-lg border" style="border-color:var(--border)"><i class="fa-solid fa-pen"></i></button>
        <button class="px-3 py-1.5 text-xs rounded-lg border text-red-500" style="border-color:var(--border)"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  `).join('');
}

function renderTopProducts(){
  const top = [
    {name:'Wireless Headphones X1', sales:842, pct:92, color:'#4f46e5'},
    {name:'Smart Watch Pro', sales:621, pct:78, color:'#7c3aed'},
    {name:'Bluetooth Speaker', sales:484, pct:62, color:'#06b6d4'},
    {name:'4K Webcam', sales:318, pct:48, color:'#16a34a'},
    {name:'Mechanical Keyboard', sales:248, pct:38, color:'#dc2626'},
  ];
  $('#topProducts').innerHTML = top.map(p=>`
    <div>
      <div class="flex justify-between text-sm mb-1"><span class="font-medium">${p.name}</span><span class="muted">${p.sales} sold</span></div>
      <div class="h-2 rounded-full bg-gray-100 dark:bg-gray-800"><div class="h-2 rounded-full" style="width:${p.pct}%; background:${p.color}"></div></div>
    </div>
  `).join('');
}

function renderNotifications(){
  $('#notifList').innerHTML = notifications.map(n=>`
    <div class="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer ${n.unread?'':'opacity-70'}">
      <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:${n.color}22; color:${n.color}"><i class="fa-solid ${n.icon}"></i></div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2"><span class="font-semibold text-sm">${n.title}</span>${n.unread?'<span class="w-2 h-2 rounded-full bg-indigo-500"></span>':''}</div>
        <div class="text-xs muted mt-0.5">${n.desc}</div>
        <div class="text-xs muted mt-1">${n.time}</div>
      </div>
    </div>
  `).join('');
}

function renderBackups(){
  $('#backupBody').innerHTML = backups.map(b=>`
    <tr class="border-b" style="border-color:var(--border)">
      <td class="py-3 px-2 font-medium">${b.id}</td>
      <td class="py-3 px-2"><span class="badge ${b.type==='Full'?'badge-info':'badge-neutral'}">${b.type}</span></td>
      <td class="py-3 px-2 muted">${b.size}</td>
      <td class="py-3 px-2 muted">${b.date}</td>
      <td class="py-3 px-2 muted">${b.dur}</td>
      <td class="py-3 px-2">${statusBadge(b.status)}</td>
      <td class="py-3 px-2"><button class="text-muted hover:text-indigo-500"><i class="fa-solid fa-download"></i></button></td>
    </tr>
  `).join('');
}

function renderUptimeGrid(){
  $('#uptimeGrid').innerHTML = Array.from({length:30},(_,i)=>{
    const ok = Math.random() > 0.05;
    return `<div class="h-6 rounded" style="background:${ok?'#16a34a':'#f59e0b'}" title="Day ${i+1}"></div>`;
  }).join('');
}

// ====== Navigation ======
function navigate(view){
  $$('.view').forEach(v=>v.classList.remove('active'));
  $$('.sidebar-link').forEach(l=>l.classList.remove('active'));
  const target = $('#view-'+view);
  if(target){ target.classList.add('active'); target.classList.add('fade-in'); }
  const link = document.querySelector(`[data-view="${view}"]`);
  if(link) link.classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
  if(window.innerWidth < 1024) closeSidebar();
  if(view==='dashboard') buildCharts();
  if(view==='analytics'){ setTimeout(buildCharts,100); }
  if(view==='cloud'){ setTimeout(buildCharts,100); }
  if(view==='inventory'){ setTimeout(buildCharts,100); }
}

// ====== Sidebar mobile ======
function openSidebar(){ $('#sidebar').classList.remove('-translate-x-full'); $('#overlay').classList.remove('hidden'); }
function closeSidebar(){ $('#sidebar').classList.add('-translate-x-full'); $('#overlay').classList.add('hidden'); }

// ====== Product Modal ======
function openProductModal(name){
  $('#modalTitle').textContent = name ? 'Edit Product' : 'Add Product';
  $('#productModal').classList.remove('hidden');
  $('#productModal').classList.add('flex');
}
function closeProductModal(){
  $('#productModal').classList.add('hidden');
  $('#productModal').classList.remove('flex');
}

// ====== Theme ======
function toggleTheme(){
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark')?'dark':'light');
  buildCharts();
}

// ====== Init ======
function init(){
  if(localStorage.getItem('theme')==='dark') document.body.classList.add('dark');

  // Nav bindings
  $$('.sidebar-link[data-view]').forEach(l=>l.addEventListener('click',()=>navigate(l.dataset.view)));
  $('#menuBtn').addEventListener('click',openSidebar);
  $('#overlay').addEventListener('click',closeSidebar);
  $('#themeToggle').addEventListener('click',toggleTheme);
  $('#logoutBtn').addEventListener('click',()=>showToast('Logged out successfully'));

  // Profile dropdown
  $('#profileBtn').addEventListener('click',e=>{ e.stopPropagation(); $('#profileMenu').classList.toggle('hidden'); });
  document.addEventListener('click',e=>{
    if(!$('#profileMenu').contains(e.target) && !$('#profileBtn').contains(e.target)) $('#profileMenu').classList.add('hidden');
  });

  // Modal close on backdrop
  $('#productModal').addEventListener('click',e=>{ if(e.target===$('#productModal')) closeProductModal(); });

  // Render all
  renderSummary();
  renderRecentOrders();
  renderOrdersFull();
  renderTimeline();
  renderProducts();
  renderCustomers();
  renderPayments();
  renderCategories();
  renderDiscounts();
  renderTopProducts();
  renderNotifications();
  renderBackups();
  renderUptimeGrid();

  // Simulate loading then build charts
  setTimeout(()=>{
    $('#loading').classList.add('hidden');
    $('#view-dashboard').classList.add('active');
    buildCharts();
  }, 600);
}

init();
