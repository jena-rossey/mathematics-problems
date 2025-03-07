import numpy as np

def generate_random_ts(n_steps=100, n_features=5):
    """Generate a random time series with N steps and M features.
    
    Args:
        n_steps (int, optional): Number of steps in the time series. Defaults to 100.
        n_features (int, optional): Number of features in the time series. Defaults to 5.
    
    Returns:
        np.ndarray: A random time series with shape (N, M)
    """
    return np.random.rand(n_steps, n_features)
