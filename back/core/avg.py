import cv2
import numpy as np
from sklearn.cluster import KMeans
import os, glob
import math


def skin_color():
    # files_path = (os.path.dirname(os.getcwd()) + '/back/static/skin_images/').replace('\\', '/')
    files_path = (os.path.dirname(os.getcwd()) + '/dpl/back/static/skin_images/').replace('\\', '/')
    files_names = glob.glob(files_path+'/*')
    px = []
    print(files_names) 
    for fl in files_names:
        img = cv2.imread(fl)
        reshape = img.reshape(img.shape[0] * img.shape[1], 3)
        px = px + [*reshape]
    n_clusters=3
    cluster = KMeans(n_clusters).fit(px)
    avg_col = cluster.cluster_centers_.mean(axis=0).tolist() 
    avg_col[0], avg_col[2] = avg_col[2], avg_col[0]
    avg_col = list(map(round, avg_col))
    return avg_col

def generate_palette():
    # files_path = (os.path.dirname(os.getcwd()) + '/back/static/base_tonals/').replace('\\', '/')
    files_path = (os.path.dirname(os.getcwd()) + '/dpl/back/static/base_tonals/').replace('\\', '/')
    files_names = glob.glob(files_path+'/*')
    px_base_colors = [] 
    for fl in files_names:
        img = cv2.imread(fl)
        reshape = img.reshape(img.shape[0] * img.shape[1], 3)
        px_base_colors.append(reshape)
    n_clusters=2
    palette = []
    for base_col in px_base_colors:
        cluster = KMeans(n_clusters).fit(base_col)
        avg_col = cluster.cluster_centers_.mean(axis=0).tolist() 
        avg_col[0], avg_col[2] = avg_col[2], avg_col[0]
        avg_col = list(map(round, avg_col))
        palette.append(avg_col)
    print(palette)
    return palette


def generate_color(palette, df_col, amount, amount_per):
    ro_next = 500
    ro_current = 1000
    generated_color = [0, 0, 0]
    non_impact = 0
    # modify = True
    flag = 0
    while flag != 10:
        for i in range(len(palette)):
            while ro_next < ro_current:
                print('calc')
                amount[i] += 1
                calc_amount_per(amount, amount_per)
                generated_color = calc_color(palette, amount_per)
                calculated_ro = calc_ro(generated_color, df_col)
                if ro_next-calculated_ro <=.3:
                # if ro_next <= calculated_ro and abs(ro_next-calculated_ro)<=.5:
                    amount[i] -= 1
                    calc_amount_per(amount, amount_per)
                    if i==len(palette)-1:
                        flag += 1
                        # modify = False
                    break
                else:
                    ro_current = ro_next
                    ro_next = calculated_ro
    amount_per = list(round(x,2) for x in amount_per)
    generated_color = list(map(round, generated_color))
    return (generated_color, amount_per, palette, ro_next)


def calc_amount_per(amount, amount_per):
    total = sum(amount)
    for i in range(len(amount)):
        amount_per[i] = amount[i]/total


def calc_color(palette, amount_per):
    color = [0, 0, 0]
    for i in range(len(palette)):
        for j in range(len(palette[i])):
            color[j] += palette[i][j] * amount_per[i]

    return color


def calc_ro(gn_col, df_col):
    return math.sqrt(math.pow(gn_col[0]-df_col[0], 2) + math.pow(gn_col[1]-df_col[1], 2) + math.pow(gn_col[2]-df_col[2], 2))

# generate_palette()
# get_avg_color()

# files_path = (os.path.dirname(os.getcwd()) + '/back/static/skin_images/').replace('\\', '/')
#     files_names = glob.glob(files_path+'/*')
#     px = [] 
#     # print(files_path, files_names)
#     for fl in files_names:
#         img = cv2.imread(fl)
#         reshape = img.reshape(img.shape[0] * img.shape[1], 3)
#         px = px + [*reshape]
#     # print(len(px))
#     n_clusters=3
#     cluster = KMeans(n_clusters).fit(px)
#     # print(cluster.cluster_centers_)
#     return cluster.cluster_centers_.mean(axis=0).tolist()
#     # return 'a'
#     # rect = np.ones((800,600,3), dtype=np.uint8)*255
#     # cv2.rectangle(rect,(250,250), (500,500), cluster.cluster_centers_.mean(axis=0),-1)
#     # cv2.imshow('a', rect)
#     # cv2.waitKey()