export default {
  categories: {
    permission: 'iplan.categories.manage',
    activated: true,
    path: '/categories',
    name: 'qplan.admin.categories.index',
    crud: import('../_crud/planCategories'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qplan.sidebar.adminCategories',
    icon: 'fas fa-ticket-alt',
    authenticated: true,
    subHeader:{
      refresh: true,
    }
  },
  plans: {
    permission: 'iplan.plans.manage',
    activated: true,
    path: '/plans',
    name: 'qplan.admin.plans.index',
    crud: import('../_crud/plans'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qplan.sidebar.adminPlans',
    icon: 'fas fa-ticket-alt',
    authenticated: true,
    subHeader:{
      refresh: true,
    }
  },
  limits: {
    permission: 'iplan.limits.manage',
    activated: true,
    path: '/limits',
    name: 'qplan.admin.limits.index',
    crud: import('../_crud/limits'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qplan.sidebar.adminLimits',
    icon: 'fas fa-ticket-alt',
    authenticated: true,
    subHeader: {
      refresh: true,
    }
  },
  subscriptions: {
    permission: 'iplan.subscriptions.manage',
    activated: true,
    path: '/subscriptions',
    name: 'qplan.admin.subscriptions.index',
    crud: import('../_crud/subscriptions'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qplan.sidebar.adminSubscriptions',
    icon: 'fas fa-ticket-alt',
    authenticated: true,
    subHeader: {
      refresh: true,
    }
  },
}
