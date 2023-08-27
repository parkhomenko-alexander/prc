import Clients from "../Clients/Clients";
import ConfiguratorCoreTonals from "../ConfiguratorCoreTonals/ConfiguratorCoreTonals";
import TonalMatcher from "../TonalMatcher/TonalMatcher";

export const headerItems = [
    {
        'title': 'Базовые средства',
        'path': '/configure-tonals',
        'element': ConfiguratorCoreTonals
    },
    {
        'title': 'Клиенты',
        'path': '/clients',
        'element': Clients
    },
    {
        'title': 'Подобрать',
        'path': '/pickup-tonal',
        'element': TonalMatcher
    }
]