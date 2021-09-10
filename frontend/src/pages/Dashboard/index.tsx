import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">DashBoard de Vendas</h1>

                <div className="row px-3">
                    {/* col-sm-6 -> bootstrap separa na horizontal em 12 partes, então estou utilizando a metade */}
                    <div className=" col-sm-6">
                        <h5 className="text-center text-secundary">Taxa de Sucesso (%)</h5>
                        <BarChart />
                    </div>
                    <div className=" col-sm-6">
                        <h5 className="text-center text-secundary">Todas Vendas</h5>
                        <DonutChart />
                    </div>

                </div>

                <div className="py-3">
                    <h2 className="text-primary">Todas Vendas</h2>
                </div>

                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;