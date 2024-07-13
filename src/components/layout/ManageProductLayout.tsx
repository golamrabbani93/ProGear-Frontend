import {Layout, Menu} from 'antd';

import {Link, Outlet} from 'react-router-dom';
const {Content, Sider} = Layout;
const items = [
	{
		key: 'manage-products',
		label: <Link to={'/manage-products'}>Manage Product</Link>,
		children: [
			{
				key: 'add-product',
				label: <Link to={'/manage-products/add-product'}>Add Product</Link>,
			},
			{
				key: 'update-product',
				label: <Link to={'/manage-products/update-product'}>Upadate Product</Link>,
			},
			{
				key: 'delete-product',
				label: <Link to={'/manage-products/delete-product'}>Delete Product</Link>,
			},
		],
	},
];
const ManageProductLayout = () => {
	return (
		<Layout className="h-full">
			<Sider
				className="fixed top-0"
				breakpoint="lg"
				collapsedWidth="0"
				onBreakpoint={(broken) => {
					console.log(broken);
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}
			>
				<div className="demo-logo-vertical" />
				<Link to={'/'} className="ml-2">
					<span className="text-white text-3xl md:text-5xl font-bold">Pro</span>
					<span className="text-primary text-2xl md:text-3xl font-bold">Gear</span>
				</Link>
				<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
			</Sider>
			<Layout>
				<Content style={{margin: '24px 16px 0'}}>
					<div
						style={{
							padding: 24,
							minHeight: 360,
						}}
					>
						<Outlet />
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default ManageProductLayout;
