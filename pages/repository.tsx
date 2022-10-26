import { useSelector } from 'react-redux';
import { fetchRepoData } from '../store/slices/repositorySlice';
import { AppState, wrapper } from '../store/store';
export const Repository = () => {
    const { repositories } = useSelector((state: AppState) => state.repository);
    return (
        <div>
            <h1>repository list</h1>
            {repositories.map((repo: any) => (
                <div key={repo.id}>
                    <h2>{repo.name}</h2>
                </div>
            ))}
        </div>
    )

}
export const getServerSideProps = wrapper.getServerSideProps((store) => async (): Promise<any> => {
    await store.dispatch(fetchRepoData());

})

export default Repository